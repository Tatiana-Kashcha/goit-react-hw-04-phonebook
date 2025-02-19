import { ContactListItems } from '../ContactListItems/ContactListItems';
import { Message } from 'components/Message/Message';
import * as s from './ContactList.styled';

export const ContactList = ({ data, deleteUser, getAllContacts, userId }) => {
  return (
    <>
      {data.length > 0 ? (
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
      ) : (
        <Message text="Contact not found!" />
      )}
    </>
  );
};
