import React from 'react';
import DataService from '../services/dataService';

class About extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		const { data } = this.props
		return (
			<div>
				{data.abstract}
			</div>
		);
	}
}

export default About;
