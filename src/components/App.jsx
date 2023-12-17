import { Component } from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';

class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    this.setState({ contacts: data });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div
          style={{
            width: 400,
            padding: '30px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            borderRadius: 20,
            boxShadow:
              'rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
          }}
        >
          <h1
            style={{
              fontWeight: 500,
              fontSize: 40,
              margin: '0px 0px 10px 0px',
            }}
          >
            Phonebook
          </h1>

          <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>

          <h2
            style={{
              fontWeight: 500,
              fontSize: 40,
              margin: '10px 0px',
            }}
          >
            Contacts
          </h2>
          {/* <Filter  /> */}
          <ContactList contacts={this.state.contacts}></ContactList>
          {/* this.options.some(option => this.state[option] !== 0) */}
          {/* {this.state.contacts ? (
              <Contacts contacts={this.state.contacts}></Contacts>
            ) : (
              <p>There is no contacts</p>
            )} */}
        </div>
      </div>
    );
  }
}

export default App;
