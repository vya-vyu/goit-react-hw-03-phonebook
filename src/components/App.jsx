import { Component } from 'react';

import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import FilterContacts from './FilterContacts/FilterContacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

    filter: '',
  };
  handleSubmitContacts = data => {
    this.state.contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? window.alert(`${data.name} is already in contacts`)
      : this.setState({ contacts: [...this.state.contacts, data] });
  };
  onFilter = value => {
    this.setState({ filter: value });
  };
  handleDeleteContact = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(el => el.id !== id)],
    });
  };
  componentDidMount() {
    const contactsFromLS = JSON.parse(localStorage.getItem('contacts'));
    console.log('LS', contactsFromLS);
    if (contactsFromLS) {
      this.setState({ contacts: contactsFromLS });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  render() {
    console.log('render');
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <Form handleSubmitContacts={this.handleSubmitContacts} />
        <h2>Contacts</h2>
        <FilterContacts onFilter={this.onFilter} />
        <ContactsList
          contacts={this.state.contacts.filter(el =>
            el.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
          onDelete={this.handleDeleteContact}
        />
      </div>
    );
  }
}
