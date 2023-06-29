import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import * as s from './App.styled';

const STORAGE_KEY = 'contact-list';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  const [filter, setFilter] = useState('');

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
