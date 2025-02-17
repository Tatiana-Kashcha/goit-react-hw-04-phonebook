import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ data, deleteUser, getAllContacts, userId }) => {
  return (
    <s.List>
      {data.map(user => (
        <s.ListItems key={user.id}>
          <ContactListItems
            user={user}
            deleteUser={deleteUser}
            getAllContacts={getAllContacts}
            userId={userId}
          />
        </s.ListItems>
      ))}
    </s.List>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
