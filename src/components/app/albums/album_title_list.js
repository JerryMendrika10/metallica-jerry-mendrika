import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import DataService from '../services/dataService';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import AlbumTitleListPlay from './album_title_list_play';
import { Cookies } from 'react-cookie';

const CustomTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white
	},
	body: {
		fontSize: 14
	}
}))(TableCell);

const styles = (theme) => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto'
	},
	table: {
		minWidth: 700
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default
		},
		button: {
			margin: theme.spacing.unit
		}
	}
});

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`
	};
}

const cookies = new Cookies();

class AlbumTitleList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			play: false,
			songName: '',
			dataSong: {}
		};
	}

	handleClick(songName) {
		const { albumName } = this.props;
		const url = 'https://wasabi.i3s.unice.fr/search/artist/Metallica/album/' + albumName + '/song/' + songName
		console.log('URL', url)
		DataService.getDatas(url).then(data => {
			this.setState({
				dataSong: data.albums && data.albums.songs,
				play: true,
				open: true,
				songName: songName
			});
		});
	}

	handleTitleListModalOpen(e, open) {
		this.setState({
			open: open
		});
	}

	render() {
		var style = {
			float: 'right'
		};
		const { classes, songs, albumName } = this.props;
		const list = songs && songs.map((song, index) => {
			return (
				<TableRow>
					<CustomTableCell>
						<Typography key={index} id="simple-modal-description" onClick={() => this.handleClick(song.title)}>{song.title}</Typography>
					</CustomTableCell>
				</TableRow>
			);
		});
		return (
			<div>
				<Modal
					aria-labelledby="simple-modal-title"
					aria-describedby="simple-modal-description"
					open={this.props.open}
				>
					<div style={getModalStyle()} className="customModal">

						<Paper>
							<Table>
								<TableHead>
									<TableRow className="head-table">
										<CustomTableCell>{albumName} </CustomTableCell>
									</TableRow>
								</TableHead>
								<TableBody>

									{list}

								</TableBody>
							</Table>
						</Paper>
						<Button style={style} onClick={(e) => this.props.handleTitleListModalOpen(e, false)}>Close</Button>
						<AlbumTitleListPlay open={this.state.open}
							songName={this.state.songName}
							albumName={albumName}
							dataSong={this.state.dataSong}
							handleTitleListModalOpen={(e) => this.handleTitleListModalOpen(e)}
						/>
					</div>
				</Modal>
			</div>
		);
	}
}

AlbumTitleList.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AlbumTitleList);
