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
    contacts: [],
    filter: '',
  };

  formSubmitHandler = formState => {
    const contactId = nanoid(5);
    formState.id = contactId;
    if (this.state.contacts.find(({ name }) => formState.name.toLowerCase() === name.toLowerCase())) {
      alert(`${formState.name} is already in contacts`);
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, formState] };
    });
  };

  componentDidMount = () => {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));
    this.setState({
      contacts: contactsFromLS,
    });
  };

  componentDidUpdate = (prevProps, prevState) => {     
    if (prevState.contacts !== this.state.contacts){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));   
  }
  };

  changeInput = input => {
    this.setState({
      [input.name]: input.value,
    });
  };

  deleteContact = contactId => {
    // contactId - id який отримуємо при натисканні на кнопку
    // змінюємо стан від попереднього
    this.setState(prevState => ({
      //  і забираємо всі контакти окрім contactId
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  findContact = () => {
    const filterContact = this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
    return filterContact;
  };

  render() {
    return (
      <Application>
        <TitlePhonebook title="Phonebook" />
        <ContactForm onSubmitForm={this.formSubmitHandler} />
        <TitleContacts title="Contacts" />
        <Filter
          onChangeInput={this.changeInput}
          inputFilter={this.state.filter}
        />
        <ContactList
          onDeleteContact={this.deleteContact}
          onfindContact={this.findContact}
        />
      </Application>
    );
  }
}
