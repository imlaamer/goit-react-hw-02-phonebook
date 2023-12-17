import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addContact();

    this.reset();

    // event.target.reset(); //не працює в реакт бо контроль форми
    // console.log(this.state); //{contacts: Array(0), name: 'Lolita Yenik', number: '+380888888'}
  };

  createContact = () => {
    const contact = {
      id: nanoid(),
      name: this.state.name,
    };
    return contact;
  };

  addContact = () => {
    this.setState(
      prevState => {
        return {
          contacts: [...prevState.contacts, this.createContact()],
        };
      },
      () => {
        this.props.onSubmit(this.state.contacts);
        //async
      }
    );
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });

    //не працює для чекбоксів , працює для радіобатон
    // console.log({ [event.currentTarget.name]: event.currentTarget.value }); //{name: 'Lolita Yenik'}
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);
  };

  render() {
    const { phonebookBox, phonebookForm, phoneBookInput, phoneBookSubmitBtn } =
      css;
    return (
      <div className={phonebookBox}>
        <form className={phonebookForm} onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              className={phoneBookInput}
              placeholder="Name"
              title="Enter your name"
              aria-label="Name"
              required
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="number" style={{ display: 'block', marginTop: 10 }}>
            Number
            <input
              id="number"
              type="tel"
              name="number"
              value={this.state.number}
              className={phoneBookInput}
              placeholder="+380-XX-XXX-XX-XX"
              title="Enter your phone number"
              aria-label="Phone number"
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className={phoneBookSubmitBtn}>
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
