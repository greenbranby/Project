import React from 'react';



//Components
import Photos from './Photos';
import NoPhotos from './NoPhotos';

const PhotoList = (props) => {

     const results = props.data;
     let photos;

     if (results.length>0) {
            photos = results.map(photo =>
                 <Photos
                   url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
                   key={photo.id}
                   title={photo.title}/>
                 );
          } else {
           photos = <NoPhotos />
          }

       return(
         <ul className="photo-list">
          {
            (props.loading)
            ? <p>Loading...</p>
            : photos
          }
          </ul>
         );
        }

export default PhotoList;
