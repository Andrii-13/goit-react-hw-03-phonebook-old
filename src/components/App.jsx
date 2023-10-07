import React, { Component } from 'react';
import { TitlePhonebook } from './TitlePhonebook/TitlePhonebook';
import { TitleContacts } from './TitleContacts/TitleContacts';
import { Application } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };


  findContact = () => {
    const filterContact = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return filterContact;
  };

  changeInput = input => {
    this.setState({
      [input.name]: input.value,
    });
    this.findContact();
  };

  submitForm = e => {
    e.preventDefault();
    const id = nanoid(5);
    this.state.contacts.push({
      name: this.state.name,
      number: this.state.number,
      id: id,
    });
    console.log(this.state.name);
    this.setState({
      contacts: this.state.contacts,
      name: '',
      number: '',
    });
    console.log(this.state.contacts);
  };

  render() {
    return (
      <Application>
        <TitlePhonebook title="Phonebook" />
        <ContactForm
          onChangeInput={this.changeInput}
          onSubmitForm={this.submitForm}
          inputName={this.state.name}
          inputNumber={this.state.number}
        />

        <TitleContacts title="Contacts" />
        <Filter onChangeInput={this.changeInput} />
        <ContactList
          contacts={this.state.contacts}
          onfindContact={this.findContact}
        />
      </Application>
    );
  }
}
