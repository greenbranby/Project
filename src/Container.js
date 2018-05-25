import React, { Component } from 'react';
import axios from 'axios';


//Components
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
import apiKey from './Config';

 class Fetch extends Component {

     constructor(props) {
       super(props);
       this.state = {
        photos: [],
        url: props.url,
        loading: true
       }
     }

     componentDidMount() {
     this.performSearch();
     }

  
     //Fetch data with Axios from Flickr API
     performSearch = (query=this.props.query) => {
     axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=20&format=json&nojsoncallback=1`)
     .then(response => {
        this.setState({
           photos: response.data.photos.photo,
           loading: false
        });
       })
       .catch(error => {
        console.log('Error fetching and parsing data', error);
       });
     }

     render() {
       console.log(this.state.photos);

       return (
        <div className="container">
          <SearchForm onSearch={this.performSearch} />
          <Nav />
            <div className ="photo-container">

             <h2>Images of {this.props.query}</h2>
              <PhotoList data={this.state.photos} title={this.state.title} loading={this.state.loading}/>
            </div>
        </div>
    );
  }
}



export default Fetch;
