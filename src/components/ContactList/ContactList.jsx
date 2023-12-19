import css from './ContactList.module.css';

function ContactList({ children }) {
  const { contactsBox, contactsList } = css;
  return (
    <div className={contactsBox}>
      <ul className={contactsList}>{children}</ul>
    </div>
  );
}

export default ContactList;
