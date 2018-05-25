import React, { Component } from 'react';


export default class SearchForm extends Component {


  constructor(props) {
      super(props);
      this.state = {
    searchText: ''
  }
}

  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value);
    e.currentTarget.reset();
  }

  render() {

    return (
    <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search"
               onChange={this.onSearchChange}
               name="search"
               ref={ (input )=> this.query = input}
               placeholder="Search" />
        <button type="submit" id="submit" className="search-button"><span className="fas fa-search"></span></button>
      </form>
    );
  }
}
