import { Component } from 'react';
import { Form } from './ContactForm.styled';
import { nanoid } from 'nanoid';



export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  
  submitForm = e => {
    e.preventDefault();
    const id = nanoid(5);
    // this.state.contacts.push({
    //   name: this.state.name,
    //   number: this.state.number,
    //   id: id,
    // });

    // console.log(
    //   this.state.contacts.some(
    //     ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
    //   )
    // ); 
    this.setState({
      contacts: this.state.contacts.push({
        name: this.state.name,
        number: this.state.number,
        id: id,
      })
   
    });
  };

  changeInput = input => {
    this.setState({
      [input.name]: input.value,
    });
    // this.findContact();
  };


  render() {
    return (
      <Form onSubmit = {this.submitForm} >
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          id="user_name"
          name="name"
          placeholder="Enter name ..."
          // колбек потрібен щоб передати інфу, інашке ми її викличемо і на onChange прилетить виконання функції, а нам потрибно щоб запустилась
          onChange={e => {
            return this.changeInput(e.target);
          }}
          value={this.state.name}
          required
        />
        <label htmlFor="user_tel">Number</label>
        <input
          type="tel"
          name="number"
          id="user_tel"
          placeholder="tel: xxx-xx-xx"
          onChange={e => {
            return this.changeInput(e.target);
          }}
          value={this.number}
          required
        />
        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
