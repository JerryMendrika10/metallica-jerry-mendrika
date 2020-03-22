import React from 'react';
import Login from "../app/backoffice/login/login"
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import RouteWithSubRoutes from "../app/routes/route";
import Config from '../config/config';
import Menu from '../app/backoffice/Includes/menu';
import Header from '../app/backoffice/Includes/header';
class MainAppAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false
        }
    }

    componentWillMount(){
        var session = sessionStorage.getItem("userAdmin");
        if(session !== null && session !== undefined){
            this.setState({
                isConnected : true
            })
        }
    }

    setConnected(value){
        this.setState({
            isConnected : value
        })
    }

    render() {
        var Login = Config.routeLogin.component;
        return (
            <Router>
                <div className="admin">
                    {
                        this.state.isConnected &&
                        <div>
                             <Header />
                        </div>
                    }
                    {
                        !this.state.isConnected &&
                        <Route
                            path={Config.routeLogin.path}
                            component={(props) => <Login 
                                setConnected={this.setConnected.bind(this)}
                            />}
                        />
                    }
                </div>
            </Router>
        );
    }
}

export default MainAppAdmin;