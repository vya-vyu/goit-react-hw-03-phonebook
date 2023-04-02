import { Component } from 'react';
import s from './FilterContacts.module.css';

class FilterContacts extends Component {
  state = {
    filter: '',
  };
  handleInputChange = e => {
    this.setState({ filter: e.currentTarget.value });
    this.props.onFilter(e.currentTarget.value);
  };

  render() {
    return (
      <div className={s.filterWrapper}>
        <label htmlFor="filter">Find contacts by name</label>
        <input
          id="filter"
          type="text"
          name="name"
          value={this.state.filter}
          onChange={this.handleInputChange}
          className={s.search}
        />
      </div>
    );
  }
}
export default FilterContacts;
