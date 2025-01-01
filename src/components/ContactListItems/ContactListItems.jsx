import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { EditForm } from 'components/EditForm/EditForm';

import * as s from './ContactListItems.styled';
import PropTypes from 'prop-types';

export const ContactListItems = ({
  user: { name, number, id },
  deleteUser,
  getAllContacts,
}) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <s.Container>
      <s.Div>
        <s.Name>{name}:</s.Name>
        <s.Number>{number}</s.Number>
      </s.Div>
      <s.Div>
        <s.ButtonEdit onClick={showModal}>Edit</s.ButtonEdit>
        <s.ButtonDel onClick={() => deleteUser(id)}>Delete</s.ButtonDel>
      </s.Div>

      {isShowModal && (
        <Modal title="Edit contact" closeModal={closeModal}>
          <EditForm
            editName={name}
            editNumber={number}
            id={id}
            closeModal={closeModal}
            getAllContacts={getAllContacts}
          />
        </Modal>
      )}
    </s.Container>
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
