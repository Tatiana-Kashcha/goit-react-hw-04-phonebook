import { useState } from 'react';
import * as s from './ContactForm.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

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
  };

  const handleSubmit = event => {
    event.preventDefault();
    addUser({ name, number });
    reset();
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
          title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleCange}
        />
      </s.Label>

      <button type="submit">Add contact</button>
    </s.Form>
  );
};

ContactForm.propTypes = {
  addUser: PropTypes.func.isRequired,
};
