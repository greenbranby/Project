import React, { Component } from 'react';
import axios from 'axios';


//Components
import './App.css';
import SearchForm from './Components/SearchForm';
import Nav from './Components/Nav';
import PhotoList from './Components/PhotoList';
import apiKey from './Config';


 class Container extends Component {
   //Defines an initial state in the Container class
     constructor(props) {
       super(props);
       this.state = {
        photos: [],
        url: props.url,
        loading: true
       }
     }

    // Sets up all of the data fetching right when the component is mounted to the DOM.
     componentDidMount() {
     this.performSearch(this.props.query);
     }


     //Fetch data with Axios from Flickr API and returns an error message along with the rejection reason as a console log.
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

     //refreshes the url after search input but also allows it to remember url history
      windowRefresh = (query) => {
        window.location.assign(`/search/${query}`);
      }

       render(props) {
         var partial;
         var display = {display: 'none'}; //used to hide title when no images are found on search
         if(this.state.photos.length === 0){
           partial = <div className="photo-container"><h4 style={display}>Images of {this.props.query}</h4></div>
         }
         else{
           partial = <div className="photo-container"><h4> Images of {this.props.query}</h4></div>
         }

         return(
               <div>
                 <div className="container">
                   <SearchForm onSearch={this.windowRefresh} />
                   <Nav />
                 <div className="photo-container">
                    {partial}
                     {
                       (this.state.loading)
                       ? <p>Loading...</p>
                       : <PhotoList data={this.state.photos} title={this.state.title} loading={this.state.loading}/>
                     }
                   </div>
                 </div>
               </div>

              );
            }
          }



export default Container;
