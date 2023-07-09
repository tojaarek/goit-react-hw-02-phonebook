import React, { Component } from 'react';
import results from './ContactList.module.css';

class ContactList extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  handleDelete = id => {
    this.props.onDelete(id);
  };

  render() {
    return (
      <ul className={results.list}>
        {this.props.contacts.map(contact => (
          <li className={results.item} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={results.button}
              onClick={() => this.handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
