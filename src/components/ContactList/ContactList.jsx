import { List } from './ContactList.styled';

export const ContactList = ({ contacts, onfindContact, onDeleteContact, onDeleteButton }) => {
  const filterContact = onfindContact();
  if (contacts.length !== filterContact.length) {
    contacts = filterContact;
  }

  return (
    <List>
      {[
        contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              {name}: {number}
              <button onClick ={()=> onDeleteContact(id)}>Delete</button>
            </li>
          );
        }),
      ]}
    </List>
  );
};
