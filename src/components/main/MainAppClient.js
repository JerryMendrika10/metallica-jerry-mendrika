import React from 'react';
import Header from "../includes/header";
import Footer from "../includes/footer";
import Config from "../config/config";
import DataService from '../app/services/dataService';
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import RouteWithSubRoutes from "../app/routes/route";
import { Redirect } from 'react-router-dom'

class MainAppClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            artist: 'Metallica',
            fulltext: '',
            listArtist: []
        }
    }

    componentWillMount() {
        this.getDatas(this.state.artist);
    }

    getDatas(artist) {
        console.log('ATOOOOOOOOoo', artist)
        const url = 'https://wasabi.i3s.unice.fr/search/artist/' + artist
        DataService.getDatas(url).then(data => {
            console.log('DATAAAAAAAAAAAS', data)
            this.setState({
                data: data,
                listArtist: []
            });
        });
    }

    handleUpdate(e) {
        let fulltext = e.target && e.target.value
        console.log('FULLTEXT', fulltext);
        if (fulltext === '') {
            this.setState({
                listArtist: []
            });
        } else {
            const urlFulltext = 'https://wasabi.i3s.unice.fr/search/fulltext/' + fulltext
            DataService.getDatas(urlFulltext).then(data => {
                this.setState({
                    listArtist: data,
                    fulltext: fulltext
                });
            });
        }

    }

    handleSelect(event) {
        const artist = event.target && event.target.value

        this.getDatas(artist);
        console.log('artits', event.target.value);
    }

    render() {

        var pathName = window.location.pathname;
        console.log(pathName);

        return (
            <Router>
                <div className="mainAppClient">
                    <Header
                        listArtist={this.state.listArtist}
                        handleUpdate={(e) => this.handleUpdate(e)}
                        navItem={Config.routesClient}
                        data={this.state.data}
                        handleSelect={(e) => this.handleSelect(e)}
                        {...this.props}
                    />
                    <div className="body-content">
                        {
                            Config.routesClient.map((route, i) => {

                                return (

                                    <RouteWithSubRoutes
                                        key={i} data={this.state.data} {...route}
                                        {...this.props}
                                    />)
                            })

                        }

                        {
                            pathName === "/" &&
                            <Redirect to='/albums' />
                        }
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default MainAppClient;