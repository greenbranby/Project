import React from 'react';



//Components
import Photos from './Photos';
import NoPhotos from './NoPhotos';

//This component will receive the data from app and be responsible only for
//how we will display our list of photos
const PhotoList = (props) => {

     const results = props.data; //stores the data
     let photos;


    //This map over the array and return a photo component for each object in the array
     if (results.length > 0) {
            photos = results.map(photo =>
                 <Photos
                   url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}//gets url of the photo
                   key={photo.id}
                   title={photo.title}/>
                 );
         } else {
          photos = <NoPhotos />
        }
          return(
            <ul className="photo-list">
              {photos}
            </ul>
          );
    }


export default PhotoList;
