import React from 'react';

class Banner extends React.Component {
	render() {
		const { data } = this.props;
		return (
			<div id="header">
				<div className="row">
					<div className="col-sm-6">
						<div className="header-parent">
							<h2 className="title_header">{data.name}</h2>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="banner-picture">
							<img src={data.picture && data.picture.big} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Banner;
