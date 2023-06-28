import * as s from './ContactListItems.styled';
import PropTypes from 'prop-types';

export const ContactListItems = ({
  user: { name, number, id },
  deleteUser,
}) => {
  return (
    <>
      <s.Name>{name}:</s.Name>
      <s.Number>{number}</s.Number>
      <s.Button onClick={() => deleteUser(id)}>Delete</s.Button>
    </>
  );
};

ContactListItems.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  deleteUser: PropTypes.func.isRequired,
};
