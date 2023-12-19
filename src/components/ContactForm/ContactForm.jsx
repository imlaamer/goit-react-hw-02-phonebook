import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createContact();
    this.passData();
    this.reset();
    // this.passData() ? this.resetName() : this.reset();
  };

  createContact = () => {
    return {
      id: nanoid(),
      ...this.state,
    };
  };

  passData = () => {
    const isDuplicate = this.props.onSubmit(this.createContact());
    return isDuplicate;
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  // resetName = () => {
  //   this.setState({ name: '' });
  // };

  render() {
    const {
      phonebookBox,
      phonebookForm,
      phoneBookInput,
      phoneBookSubmitBtn,
      formLabel,
      phoneBookInputNumber,
    } = css;

    return (
      <div className={phonebookBox}>
        <form className={phonebookForm} onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name" className={formLabel}>
              Name
              <input
                id="name"
                type="text"
                name="name"
                value={this.state.name}
                className={phoneBookInput}
                placeholder="Name"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces (for example: Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan)"
                aria-label="Name"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>
          <div>
            <label htmlFor="number" className={formLabel}>
              Number
              <input
                id="number"
                type="tel"
                name="number"
                value={this.state.number}
                className={phoneBookInputNumber}
                placeholder="123-45-67"
                pattern="\d{3}[\-]\d{2}[\-]\d{2}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with + (for example: 123-45-67)"
                aria-label="Phone number"
                required
                onChange={this.handleChange}
              />
            </label>
            <button type="submit" className={phoneBookSubmitBtn}>
              Add contact
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;
