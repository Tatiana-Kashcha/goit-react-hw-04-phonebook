import { useState, useEffect, useCallback } from 'react';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Logout } from 'components/Logout/Logout';
import { Message } from 'components/Message/Message';
import { Filter } from 'components/Filter/Filter';

import { db } from '../../firebase/firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';

import * as s from './Phonebook.styled';

export const Phonebook = ({ user }) => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const userName = user?.displayName;
  const userId = user?.uid;

  if (!userName) {
    window.location.reload();
  }

  const addUser = async data => {
    try {
      const isDuplicateUser = contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      );

      if (isDuplicateUser) {
        alert('This name is already in the contacts list.');
        return;
      }

      const contactsRef = collection(db, 'users', userId, 'contacts');
      await addDoc(contactsRef, { ...data }); // до списку контактів поточного користувача

      // await addDoc(collection(db, 'contacts'), { ...data }); // до загальної таблиці
    } catch (error) {
      console.log(error);
    }
    getAllContacts();
  };

  const getAllContacts = useCallback(async () => {
    if (!userId) return;

    try {
      const contactsRef = collection(db, 'users', userId, 'contacts');
      const querySnapshot = await getDocs(contactsRef); // список контактів поточного користувача

      // const querySnapshot = await getDocs(collection(db, 'contacts')); // список із загальної таблиці
      const allContacts = querySnapshot.docs.map(contact => ({
        id: contact.id,
        ...contact.data(),
      }));

      const sortedContacts = [...allContacts].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      setContacts(sortedContacts);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  useEffect(() => {
    getAllContacts();
  }, [getAllContacts]);

  const deleteUser = async id => {
    const contactRef = doc(db, 'users', userId, 'contacts', id);
    await deleteDoc(contactRef); // із контактів поточного користувача

    // await deleteDoc(doc(db, 'contacts', id)); // із загальної таблиці
    try {
    } catch (error) {
      console.log(error);
    }
    getAllContacts();
  };

  const handleCangeFilter = e => {
    setFilter(e.target.value.trim());
  };

  const searchContactInBook = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const searchContact = searchContactInBook();

  return (
    <s.Section>
      <s.Container>
        <s.Div>
          <h1>Phonebook</h1>
          <s.Div>
            <s.Greeting>
              Welcome, <span>{userName}</span>
            </s.Greeting>
            <UserAvatar user={user} />

            <Logout />
          </s.Div>
        </s.Div>

        <ContactForm addUser={addUser} />
        {contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter filter={filter} handleCangeFilter={handleCangeFilter} />
            <ContactList
              data={searchContact}
              deleteUser={deleteUser}
              getAllContacts={getAllContacts}
              userId={userId}
            />
          </>
        ) : (
          <Message text="Your contacts will be here!" />
        )}
      </s.Container>
    </s.Section>
  );
};
