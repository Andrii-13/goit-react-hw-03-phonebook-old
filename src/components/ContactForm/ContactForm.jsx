import { Form } from './ContactForm.styled';

export const ContactForm = ({ onChangeInput, onSubmitForm, inputValue }) => {
  
    return (
    <Form onSubmit={onSubmitForm}>
      <label htmlFor="user_name">Name</label>
      <input
        type="text"
        id="user_name"
        name="name"
        placeholder="Enter name ..."
        // колбек потрібен щоб передати інфу, інашке ми її викличемо і на onChange прилетить виконання функції, а нам потрибно щоб запустилась
        onChange={e => {
          return onChangeInput(e.target.value);
        }}
        value={inputValue}
        required
      />
      <button type="submit">Add contact</button>
    </Form>  
  );
};
