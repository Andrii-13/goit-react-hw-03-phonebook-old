import React, { Component } from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { Application } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  changeInput = inputName => { 
     this.setState({
      name :inputName
     })    
  };

  submitForm = (e) => {
    e.preventDefault();
    console.log(e);
    const id = nanoid(5);
    this.state.contacts.push({name: this.state.name, id: {id}})
    this.setState({
      contacts : this.state.contacts
     })  
    
  };

  render() {   

    return (
      <Application>
        <TitlePhonebook title="Phonebook" />
        <ContactForm
          onChangeInput={this.changeInput}
          onSubmitForm={this.submitForm}
          inputValue={this.state.name}
        />

        <TitleContacts title="Contacts" />
        <ContactList contacts={this.state.contacts} />
      </Application>
    );
  }
}
