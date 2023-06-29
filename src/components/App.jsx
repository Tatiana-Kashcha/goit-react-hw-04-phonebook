import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import * as s from './App.styled';

const STORAGE_KEY = 'contact-list';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  // const useLocalStorage = (key, defaultValue) => {
  //   const [state, setState] = useState(() => {
  //     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  //   });

  //   useEffect(() => {
  //     window.localStorage.setItem(key, JSON.stringify(state));
  //   }, [key, setState]);

  //   return [state, setState];
  // };

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) {
      setContacts(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    }
  }, []);

  // componentDidMount() {
  //   if (localStorage.getItem(STORAGE_KEY)) {
  //     this.setState({
  //       contacts: JSON.parse(localStorage.getItem(STORAGE_KEY)),
  //     });
  //   }
  // }

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  // componentDidUpdate(_, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
  //   }
  // }

  const addUser = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };

    const isDuplicateUser = contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isDuplicateUser) {
      alert('This name is already in the contacts list.');
      return;
    }

    setContacts(prev => [...prev, newUser]);
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newUser],
    // }));
  };

  const deleteUser = id => {
    setContacts(contacts.filter(el => el.id !== id));
    // this.setState(prevState => ({
    //   contacts: prevState.contacts.filter(el => el.id !== id),
    // }));
  };

  const handleCangeFilter = e => {
    setFilter({ filter: e.target.value });
    // this.setState({ filter: e.target.value });
  };

  const searchUserBook = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const searchUser = searchUserBook();

  return (
    <s.Container>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter filter={filter} handleCangeFilter={handleCangeFilter} />
          <ContactList data={searchUser} deleteUser={deleteUser} />
        </>
      )}
    </s.Container>
  );
};

export default App;
// {this.state.contacts.length > 0 && (
