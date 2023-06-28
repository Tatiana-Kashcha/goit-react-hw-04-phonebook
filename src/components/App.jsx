import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import * as s from './App.styled';

const STORAGE_KEY = 'contact-list';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (localStorage.getItem(STORAGE_KEY)) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem(STORAGE_KEY)),
      });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  }

  addUser = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };

    const { contacts } = this.state;

    const isDuplicateUser = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicateUser) {
      alert('This name is already in the contacts list.');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newUser],
    }));
  };

  deleteUser = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleCangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  searchUser = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const searchUser = this.searchUser();

    return (
      <s.Container>
        <h1>Phonebook</h1>
        <ContactForm addUser={this.addUser} />
        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter
              filter={filter}
              handleCangeFilter={this.handleCangeFilter}
            />
            <ContactList data={searchUser} deleteUser={this.deleteUser} />
          </>
        )}
      </s.Container>
    );
  }
}

export default App;
