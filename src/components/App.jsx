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
    if (window.localStorage.getItem(STORAGE_KEY)) {
      setContacts(JSON.parse(window.localStorage.getItem(STORAGE_KEY)));
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
  };

  const deleteUser = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const handleCangeFilter = e => {
    setFilter(e.target.value.trim());
  };

  const searchUserBook = () => {
    const normalised = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalised)
    );
  };

  const searchUser = searchUserBook();

  // const searchContact = () => {
  //   const normalisedFilter = filter.toLowerCase();

  //   const searchedContacts = contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalisedFilter)
  //   );

  //   return searchedContacts;
  // };

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