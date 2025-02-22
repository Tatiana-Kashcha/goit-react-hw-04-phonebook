import { db } from '../../firebase/firebaseConfig';
import { setDoc, doc } from 'firebase/firestore';

import { useState } from 'react';

import * as s from './EditForm.styled';

export const EditForm = ({
  editName,
  editNumber,
  id,
  closeModal,
  getAllContacts,
  userId,
}) => {
  const [name, setName] = useState(editName);
  const [number, setNumber] = useState(editNumber);
  const [buttonDisabled, setbuttonDisabled] = useState(true);

  const handleCange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
    if (name !== editName || number !== editNumber) {
      setbuttonDisabled(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const contactRef = doc(db, 'users', userId, 'contacts', id); // у поточного користувача
      // const contactRef = doc(db, 'contacts', id); // у загальній таблиці
      await setDoc(contactRef, { name, number, id }, { merge: true });
    } catch (error) {
      console.log(error);
    }

    getAllContacts();
    reset();
    closeModal();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <s.Form onSubmit={handleSubmit}>
      <s.Label>
        Name
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleCange}
        />
      </s.Label>

      <s.Label>
        Number
        <input
          type="number"
          name="number"
          required
          value={number}
          onChange={handleCange}
        />
      </s.Label>

      <button disabled={buttonDisabled} type="submit">
        Change
      </button>
    </s.Form>
  );
};
