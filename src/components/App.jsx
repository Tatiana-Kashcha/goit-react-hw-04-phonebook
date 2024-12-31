import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, getDocs, doc } from 'firebase/firestore';

import * as s from './App.styled';

const App = () => {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) ?? [];
  // });

  // useEffect(() => {
  //   window.localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  const [contacts, setContacts] = useState([]);

  const addUser = data => {
    const newUser = {
      id: nanoid(),
      ...data,
    };

    // const isDuplicateUser = contacts.some(
    //   contact => contact.name.toLowerCase() === data.name.toLowerCase()
    // );

    // if (isDuplicateUser) {
    //   alert('This name is already in the contacts list.');
    //   return;
    // }

    // setContacts(prev => [...prev, newUser]);
  };

  const getAllContacts = async () => {
    const querySnapshot = await getDocs(collection(db, 'contacts'));
    const allContacts = querySnapshot.docs.map(contact => ({
      id: contact.id,
      ...contact.data(),
    }));
    setContacts(allContacts);
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const deleteUser = id => {
    // setContacts(contacts.filter(el => el.id !== id));
  };

  return (
    <s.Container>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      {/* {contacts.length > 0 && ( */}
      <>
        <h2>Contacts</h2>
        <ContactList data={contacts} deleteUser={deleteUser} />
      </>
      {/* )} */}
    </s.Container>
  );
};

export default App;
