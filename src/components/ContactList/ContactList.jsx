import { List } from './ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <List>
      {[
        contacts.map(({name, id}) => {
          return <li key={id}>{name}</li>;
        }),
      ]}
    </List>
  );
};
