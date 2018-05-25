import React from 'react';

//displays when non-existent URL is called
const Error = props => (
    <div className="no-photos">
		<h3>404 Error</h3>
		<p>The page you're looking for doesn't exist.  Please try again.</p>
    </div>
    );


export default Error;
