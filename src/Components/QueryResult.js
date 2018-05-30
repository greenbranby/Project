import React from 'react';
import Container from '../Container';


const QueryResults = ({match}) => {

	return (
			<Container query={match.params.query}/>
		);
	}

export default QueryResults;
