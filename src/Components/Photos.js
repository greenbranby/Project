import React from 'react';

// This component contains the template
// that displays each image.

const Photos = (props) => {
  return(
      <li className="photo-wrap">
         <img src={props.url} alt={props.title}/>
       </li>
     );
}


export default Photos;
