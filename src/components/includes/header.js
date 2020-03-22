import React from 'react';
import Menu from "./menu";
import Banner from "./banner";
class Header extends React.Component {
    render() {
        return (
            <div className="header_">
                <Menu
                    navItem={this.props.navItem} 
                    handleUpdate={this.props.handleUpdate}
                    handleSelect={this.props.handleSelect}
                    listArtist={this.props.listArtist}
                    {...this.props}/>
                <Banner data={this.props.data}/>
            </div>
        );
    }
}

export default Header;