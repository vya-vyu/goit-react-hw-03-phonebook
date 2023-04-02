import { Component } from 'react';
import s from './ContactsList.module.css';

class ContactsList extends Component {
  handleDelete = e => {
    this.props.onDelete(e.target.id);
  };
  render() {
    return (
      <>
        <ul>
          {this.props.contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <div className={s.item}>
                  {' '}
                  <span>
                    {name}: {number}
                  </span>
                  <button
                    id={id}
                    type="button"
                    className={s.btn}
                    onClick={this.handleDelete}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
export default ContactsList;
