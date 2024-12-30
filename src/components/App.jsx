import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import * as s from './App.styled';

const STORAGE_KEY = 'contact-list';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  });
  //nnnnnnnnn
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

  return (
    <s.Container>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <ContactList data={contacts} deleteUser={deleteUser} />
        </>
      )}
    </s.Container>
  );
};

export default App;
