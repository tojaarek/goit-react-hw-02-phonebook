import React, { Component } from 'react';
import filter from './Filter.module.css';

class Filter extends Component {
  state = {
    filter: '',
  };
  handleChange = event => {
    this.props.onFilterChange(event.target.value);
  };

  render() {
    return (
      <label className={filter.label} htmlFor="searchInput">
        Find contacts by name
        <input
          id="searchInput"
          className={filter.input}
          type="text"
          filter={this.props.filter}
          onChange={this.handleChange}
        />
      </label>
    );
  }
}

export default Filter;
