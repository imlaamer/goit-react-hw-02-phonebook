import { Component } from 'react';
import css from './ContactList.module.css';

class ContactList extends Component {
  // function formSubmitHandler(data) {
  //   console.log(data, 'DATA');
  // }

  render() {
    const { contactsBox, contactsList, contactsItem, contactsText } = css;
    return (
      <div className={contactsBox}>
        <ul className={contactsList}>
          {this.props.contacts?.length !== 0 &&
            this.props.contacts.map(contact => {
              return (
                <li key={contact.id} className={contactsItem}>
                  <p className={contactsText}>{contact.name}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

export default ContactList;
