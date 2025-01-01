import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { db } from '../firebase/firebaseConfig';
import { collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';

import * as s from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const addUser = async data => {
    try {
      const isDuplicateUser = contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      );

      if (isDuplicateUser) {
        alert('This name is already in the contacts list.');
        return;
      }

      await addDoc(collection(db, 'contacts'), { ...data });
    } catch (error) {
      console.log(error);
    }
    getAllContacts();
  };

  const getAllContacts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const allContacts = querySnapshot.docs.map(contact => ({
        id: contact.id,
        ...contact.data(),
      }));
      setContacts(allContacts);
    } catch (error) {
      console.log(error);
    }
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
      {contacts.length > 0 && (
        <>
          <h2>Contacts</h2>
          <ContactList
            data={contacts}
            deleteUser={deleteUser}
            getAllContacts={getAllContacts}
          />
        </>
      )}
    </s.Container>
  );
};

export default App;
