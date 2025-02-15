import { useState, useEffect } from 'react';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Logout } from 'components/Logout/Logout';

import { db } from '../../firebase/firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

import * as s from './Phonebook.styled';

export const Phonebook = ({ user }) => {
  const [contacts, setContacts] = useState([]);
  const [userName, setUserName] = useState(user?.displayName);

  const auth = getAuth();

  useEffect(() => {
    (async () => {
      try {
        await auth.currentUser.reload();
        setUserName(auth.currentUser?.displayName);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [auth.currentUser]);

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

      const sortedContacts = [...allContacts].sort((a, b) =>
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
      setContacts(sortedContacts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const deleteUser = async id => {
    await deleteDoc(doc(db, 'contacts', id));
    try {
    } catch (error) {
      console.log(error);
    }
    getAllContacts();
  };

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
    </s.Section>
  );
};
