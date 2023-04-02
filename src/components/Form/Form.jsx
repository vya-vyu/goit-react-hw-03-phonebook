import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };
  handleSubmit = e => {
    e.preventDefault();

    const data = { id: uuidv4(), ...this.state };
    this.props.handleSubmitContacts(data);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <>
        <form className={s.phonebook} onSubmit={this.handleSubmit}>
          <div className={s.inputWrapper}>
            <label htmlFor="name" className={s.title}>
              Name:
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
              className={s.inputText}
            />
            <label htmlFor="number" className={s.title}>
              Number:
            </label>
            <input
              id="number"
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
              className={s.inputText}
            />
          </div>

          <button type="submit" className={s.submit}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default Form;
