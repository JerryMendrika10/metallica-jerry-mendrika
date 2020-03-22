import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import DataService from '../services/dataService';
import YouTube from 'react-youtube';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
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

class AlbumTitleListPlay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			play: false,
			youtubeId: ''
		};
	}

	handleClose() {
		this.setState({
			open: false
		})
	}

	_onReady(event) {
		event.target.pauseVideo();
	  }

	render() {
		const opts = {
			height: '390',
			width: '640',
			playerVars: { 
			  autoplay: 1
			}
		  };

		var style = {
			float: 'right'
		};
		const { songName, albumName, dataSong } = this.props;
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
										<CustomTableCell>{songName}</CustomTableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									<TableRow>
										{albumName + ' - ' + songName}
										<br />
										<br />
										<YouTube
											videoId={dataSong.urlYouTube}
											opts={opts}
											onReady={this._onReady}
										/>

									</TableRow>
								</TableBody>
							</Table>
						</Paper>
						<Button style={style} onClick={(e) => this.props.handleTitleListModalOpen(e, false)}>Close</Button>
					</div>
				</Modal>
			</div>
		);
	}
}

AlbumTitleListPlay.propTypes = {
	classes: PropTypes.object.isRequired
};
export default withStyles(styles)(AlbumTitleListPlay);
