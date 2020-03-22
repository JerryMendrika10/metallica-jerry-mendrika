import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';


class MemberList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			albumList: [],
			albumName: ''
		}
	}

	jsxJoin(array, str) {
		return array.length > 0
			? array.reduce((result, item) => <>{result}{str}{item}</>)
			: null;
	}

	initiateList(style) {
		const { data, formers } = this.props;
		return data.albums && data.members.map((member, index) => {
			return (
				<div key={index} className="col-md-4">
					<div className="polaroid list-plat" >
						<div className="container container-plat-liste">
							<span className="album-title">{member.name}</span>
						</div>{' '}{' '}
						<div className="container-img">
							<List >
								<ListItem button>
									<ListItemIcon>
										<SendIcon />
									</ListItemIcon>
									<ListItemText primary="Intruments" secondary={member.instruments && this.jsxJoin(member.instruments, ', ')} />
								</ListItem>

								<ListItem button>
									<ListItemIcon>
										<SendIcon />
									</ListItemIcon>
									<ListItemText primary="Years of activities" secondary={member.begin} />
								</ListItem>
							</List>

						</div>

						<br />
					</div>
				</div>
			)
		})
	}

	initiateListFormers(style) {
		const { data, formers } = this.props;
		return data.albums && data.members.map((member, index) => {
			if (formers && member.ended === formers) {
				return (
					<div key={index} className="col-md-4">
						<div className="polaroid list-plat" >
							<div className="container container-plat-liste">
								<span className="album-title">{member.name}</span>
							</div>{' '}{' '}
							<div className="container-img">
								<List >
									<ListItem button>
										<ListItemIcon>
											<SendIcon />
										</ListItemIcon>
										<ListItemText primary="Intruments" secondary={member.instruments && this.jsxJoin(member.instruments, ', ')} />
									</ListItem>
	
									<ListItem button>
										<ListItemIcon>
											<SendIcon />
										</ListItemIcon>
										<ListItemText primary="Begin" secondary={member.begin} />
									</ListItem>
	
									<ListItem button>
										<ListItemIcon>
											<SendIcon />
										</ListItemIcon>
										<ListItemText primary="End" secondary={member.end} />
									</ListItem>
								</List>
	
							</div>
	
							<br />
						</div>
					</div>
				)
			} else if(!formers && member.ended === formers) {
				return (
					<div key={index} className="col-md-4">
						<div className="polaroid list-plat" >
							<div className="container container-plat-liste">
								<span className="album-title">{member.name}</span>
							</div>{' '}{' '}
							<div className="container-img">
								<List >
									<ListItem button>
										<ListItemIcon>
											<SendIcon />
										</ListItemIcon>
										<ListItemText primary="Intruments" secondary={member.instruments && this.jsxJoin(member.instruments, ', ')} />
									</ListItem>
	
									<ListItem button>
										<ListItemIcon>
											<SendIcon />
										</ListItemIcon>
										<ListItemText primary="Years of activities" secondary={member.begin} />
									</ListItem>
								</List>
	
							</div>
	
							<br />
						</div>
					</div>
				)
			}
			
		})
	}


	render() {
		const style = {
			width: "100%"
		}
		const { formers } = this.props
		return (
			<div className="row">
				{this.initiateListFormers(style)}
			</div>
		);
	}
}

export default MemberList;
