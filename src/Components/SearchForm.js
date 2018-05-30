import React, { Component } from 'react';



 class SearchForm extends Component {


  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSearch = (e) => {
      this.setState({ searchText: e.target.value });
    }

  handleSubmit = e => {
         e.preventDefault();
         this.props.onSearch(this.query.value);
         e.currentTarget.reset();
       }


  render() {

    return (
    <form className="search-form" onSubmit={this.handleSubmit}>
        <input type="search"
               name="search"
               ref={ (input )=> this.query = input}
               onChange={this.onSearch}
               placeholder="Search" />
        <button type="submit" id="submit" className="search-button"><span className="fas fa-search"></span></button>
      </form>
    );
  }
}

export default SearchForm
