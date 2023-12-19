import { Fragment } from 'react';
import css from './ContactItem.module.css';

function ContactItem({ filteredContacts, onClick }) {
  const { contactsItem, contactsText, contactDeleteBtn } = css;
  return (
    <Fragment>
      {filteredContacts?.map(contact => {
        return (
          <li key={contact.id} className={contactsItem}>
            <p className={contactsText}>
              {contact.name} : {contact.number}
            </p>
            <button
              type="button"
              className={contactDeleteBtn}
              onClick={() => onClick(contact.id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </Fragment>
  );
}

export default ContactItem;
