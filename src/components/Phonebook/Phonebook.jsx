import { useState, useEffect } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Logout } from 'components/Logout/Logout';

import { db, storage } from '../../firebase/firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getAuth, updateProfile } from 'firebase/auth';

import noImageIcon from '../../images/avatar.png';
import * as s from './Phonebook.styled';

export const Phonebook = ({ userName, avatar }) => {
  const [contacts, setContacts] = useState([]);
  const [photoURL, setPhotoURL] = useState(avatar);
  console.log(photoURL);

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

  // const uploadFile = async file => {
  //   try {
  //     // Створення референсу до місця збереження
  //     const storageRef = ref(storage, `profile_photos/${file.name}`);

  //     // Завантаження файлу
  //     const snapshot = await uploadBytes(storageRef, file);

  //     // Отримання URL завантаженого файлу
  //     const downloadURL = await getDownloadURL(snapshot.ref);

  //     console.log('Файл завантажено:', downloadURL);
  //     setPhotoURL(downloadURL);
  //   } catch (error) {
  //     console.error('Помилка завантаження файлу:', error);
  //   }
  // };

  // Завантаження фото в Firebase Storage
  const uploadPhotoToFirebase = async file => {
    const storageRef = ref(storage, `profile_photos/${file.name}`);

    try {
      // Завантажити файл
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      setPhotoURL(downloadURL);

      console.log('Фото завантажено:', downloadURL);
    } catch (error) {
      console.error('Помилка завантаження фото:', error);
    }
  };

  const handleFileChange = async event => {
    const file = event.target.files[0];
    if (file) {
      await uploadPhotoToFirebase(file);
    }
  };

  // Відкрити вибір файлу
  const handlePhotoClick = () => {
    document.getElementById('fileInput').click();
  };

  const updateUserProfilePhoto = async photoURL => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      await updateProfile(auth.currentUser, { photoURL: photoURL });
      console.log('Profile photo updated successfully!');
    } else {
      console.log('No user is signed in');
    }
  };

  useEffect(() => {
    updateUserProfilePhoto(photoURL);
  }, [photoURL]);

  return (
    <s.Section>
      <s.Container>
        <s.Div>
          <h1>Phonebook</h1>
          <s.Div>
            <s.Greeting>
              Welcome, <span>{userName}</span>
            </s.Greeting>
            <s.Thumb>
              <s.Avatar
                src={avatar ? avatar : noImageIcon}
                alt={avatar ? `Avatar ${userName}` : 'Default avatar'}
                onClick={handlePhotoClick}
              />
              <s.Upload
                id="fileInput"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </s.Thumb>

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
