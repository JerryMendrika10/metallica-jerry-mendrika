import React from 'react';
import AlbumTitleList from './album_title_list';
import DataService from '../services/dataService';

class AlbumList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			albumList: [],
			albumName: ''
		}
	}

	handleTitleListModalOpen(e, value, songs, albumName) {
		this.setState({
			open: value,
			albumList: songs,
			albumName: albumName
		});
	}

	initiateList(style) {
		const { data } = this.props;
		return data.albums && data.albums.map((album, index) => {
			return (
				<div key={index} className="col-md-4">
					<div className="polaroid list-plat" onClick={(e) => { this.handleTitleListModalOpen(e, true, album.songs, album.title) }}>
						<div className="container-img">
							<img
								src={album.cover && album.cover.medium}
								alt={album.title}
								style={style}
							/>

						</div>
						<div className="container container-plat-liste">
							<span className="album-title">{album.title}</span>
						</div>{' '}
						<br />
					</div>
				</div>
			)
		})
	}


	render() {
		const style = {
			width: "100%"
		}

		return (
			<div className="row">
				{this.initiateList(style)}
				<AlbumTitleList open={this.state.open}
					songs={this.state.albumList}
					albumName={this.state.albumName}
					handleTitleListModalOpen={this.handleTitleListModalOpen.bind(this)}
				/>
			</div>
		);
	}
}

export default AlbumList;
