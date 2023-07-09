import React, { Component } from 'react';
import './App.module.css';
import AddContactForm from './AddContactForm/AddContactForm';
import app from './App.module.css';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  handleAddContact = data => {
    const { contacts } = this.state;
    const duplicateContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (duplicateContact) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  checkValueInContacts = value => {
    const { contacts } = this.state;
    const lowercaseValue = value.toLowerCase();
    return contacts.some(contact =>
      contact.name.toLowerCase().includes(lowercaseValue)
    );
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    const isValueInContacts = this.checkValueInContacts(filter);

    return (
      <div className={app.position}>
        <div className={app.app}>
          <h1 className={app.headline}>Phonebook</h1>
          <AddContactForm onAddContact={this.handleAddContact} />
          <h2 className={app.headline}>Contacts</h2>
          <Filter
            filter={filter}
            onFilterChange={this.handleFilterChange}
            isValueInContacts={isValueInContacts}
          />
          <ContactList
            contacts={filteredContacts}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
