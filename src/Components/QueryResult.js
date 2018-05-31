import React from 'react';
import Container from '../Container';

//Component that holds the results of search input
const QueryResult = ({match}) => {

	return (
			<Container query={match.params.query}/>
		);
	}



export default QueryResult;
