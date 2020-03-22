import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
//import { Autocomplete } from "@autocomplete/material-ui";
//import {Autocomplete} from '@material-ui/lab';
import Autocomplete from '@material-ui/lab/Autocomplete';
//import {Autocomplete} from '@material-ui/lab';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 200,
		color: "#17a2b8"
	},
	dense: {
		marginTop: 19,
	},
	menu: {
		width: 200,
	},
});

class Menu extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			top100Films: [
				{ title: 'The Shawshank Redemption', year: 1994 },
				{ title: 'The Godfather', year: 1972 },
				{ title: 'The Godfather: Part II', year: 1974 },
				{ title: 'Se7en', year: 1995 },
				{ title: 'The Silence of the Lambs', year: 1991 },
				{ title: "It's a Wonderful Life", year: 1946 },
				{ title: 'Life Is Beautiful', year: 1997 },
				{ title: 'The Usual Suspects', year: 1995 },
				{ title: 'Léon: The Professional', year: 1994 },
				{ title: 'Spirited Away', year: 2001 },
				{ title: 'Saving Private Ryan', year: 1998 },
				{ title: 'Once Upon a Time in the West', year: 1968 },
				{ title: 'American History X', year: 1998 },
				{ title: 'Interstellar', year: 2014 },
				{ title: 'Casablanca', year: 1942 },
				{ title: 'City Lights', year: 1931 },
				{ title: 'Psycho', year: 1960 },
			]
		}
	}

	handleChange = (event) => {
		console.log('VALUE', event.target.value)
		this.props.handleUpdate(event)
		// this.setState(() => ({ form[name]: value }))
	}

	handleSelect = (event) => {
		this.props.handleSelect(event)
	}

	render() {
		var textField = {
			width: "100%",
			marginTop: "10px",
			color: "#fff"
		}
		const { classes } = this.props;
		var { navItem } = this.props;
		return (
			<div className="menu" id="menu">
				<nav className="navbar my-menu navbar-expand-sm bg-info-custom navbar-dark">
					{/*<ul className="navbar-nav">
						{navItem.map((nav, index) => {
							return (
								<li key={index}>
									<Link className="nav-link" key={index} to={nav.path}>
										{nav.text}
									</Link>
								</li>
							);
						})}
					</ul>*/}
					<Autocomplete
						className={{
							option: styles.textField,
						}}
						freeSolo
                        disableClearable
						autoSelect={true}
						onChange={(e) => this.handleChange(e)}
						// onClick={(e) => this.handleClick(e)}
						options={this.props.listArtist && this.props.listArtist.map(option => option.name)}
						renderInput={params => (
							<TextField style={styles.textField}
								{...params}
								placeholder="Search"
								onSelect={(e) => this.handleSelect(e)}
								onChange={(e) => this.handleChange(e)}
								autoSelect={true}
								style={{ width: 1300 }}
								InputProps={{ ...params.InputProps, type: 'search' }}
							/>
						)}
					/>
					<br />
					<br />
				</nav>
			</div>
		);
	}

}

export default withRouter(withStyles(styles)(Menu));
