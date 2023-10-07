import { Form } from './ContactForm.styled';

export const ContactForm = ({ onChangeInput, onSubmitForm, inputName,  inputNumber}) => {
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
          return onChangeInput(e.target);
        }}
        value={inputName}
        required
      />
      <label htmlFor="user_tel">Number</label>
      <input
        type="tel"
        name="number"
        id="user_tel"
        placeholder="tel: xxx-xx-xx"
        onChange={e => {
          return onChangeInput(e.target);
        }}
        value={inputNumber}
        required
      />
      <button type="submit">Add contact</button>
    </Form>
  );
};
