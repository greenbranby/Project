import React from 'react';


//This component loads when there are no photos that match the search input.
const NoPhotos = props => (
    <div className='no-photos'>
      <h2>Sorry, no images match your search.</h2>
      <p>Your search term did not return any results, please try again.</p>
    </div>
    );

export default NoPhotos;
