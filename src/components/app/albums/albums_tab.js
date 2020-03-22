import React from 'react';
import Config from '../../config/config';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import About from './about';
import AlbumList from './album_list';
import MemberList from './member_list';

var style = {
	width: '300px'
};
const styles = (theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#17a2b8',
		width: '100%'
	}
});

function TabContainer(props) {
	return (
		<Typography component="div" style={{ padding: 8 * 3 }}>
			{props.children}
		</Typography>
	);
}

TabContainer.propTypes = {
	children: PropTypes.node.isRequired
};

class AlbumsTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	jsxJoin(array, str) {
		return array.length > 0
			? array.reduce((result, item) => <>{result}{str}{item}</>)
			: null;
	}

	handleChange = (event, value) => {
		this.setState({ value });
	};

	render() {
		var index = 0;
		var i = 0;
		const { value } = this.state;
		const { data } = this.props;
		console.log('DATA', data)
		return (
			<div className="row album">
				<div className="col-sm-8 ">
					<div key={index}>
						{
							<AppBar position="static">
								<Tabs
									value={value}
									onChange={this.handleChange}
									className="tab-plat"
									variant="fullWidth"
								>
									<Tab key={0} label="Albums" />
									<Tab key={1} label="See former members" />
									<Tab key={2} label="See members" />
									<Tab key={3} label="About" />
								</Tabs>
							</AppBar>
						}

						<div key={0}>
							{value === 0 && (
								<TabContainer>
									<AlbumList data={data} />
								</TabContainer>
							)}
						</div>
						<div key={1}>{value === 1 && <TabContainer>
							<MemberList data={data} formers={true}/>
							</TabContainer>}</div>
						<div key={2}>{value === 2 && (
							<TabContainer>
								<MemberList data={data} formers={false}/>
							</TabContainer>)}
						</div>
						<div key={3}>
							{value === 3 && (
								<TabContainer>
									<About data={data} />
								</TabContainer>
							)}
						</div>
					</div>
				</div>
				<div className="col-sm-4 ">
					<div className="jumbotron content-menu">
						<div className="descirption">
							<h2 className="description-title">Description</h2>
						</div>
					</div>
					<div className="jumbotronContent content-menu-content">
						<Table>
							<TableHead>
							</TableHead>
							<TableBody>
								<TableRow>
									<TableCell style={style} component="th" scope="row">
										<h4>Birthdate</h4>
									</TableCell>
									<TableCell align="right">{data.lifeSpan && data.lifeSpan.begin}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
										<h4>Location</h4>
									</TableCell>
									<TableCell align="right">{data.location && data.location.country + ', ' + data.location.city}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
										<h4>Genre</h4>
									</TableCell>
									<TableCell align="right">{data.genres && this.jsxJoin(data.genres, ', ')}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
										<h4>Label</h4>
									</TableCell>
									<TableCell align="right">{data.labels && this.jsxJoin(data.labels, ', ')}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component="th" scope="row">
										<h4>Number of Deezer fans</h4>
									</TableCell>
									<TableCell align="right">{data.deezerFans && data.deezerFans}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell style={style} component="th" scope="row">
										<h4>Associated artist(s)</h4>
									</TableCell>
									<TableCell align="right">{data.associatedMusicalArtist && this.jsxJoin(data.associatedMusicalArtist, ', ')}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(AlbumsTab);
