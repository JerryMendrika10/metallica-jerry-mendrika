import React, { Component } from "react";
import { Route } from "react-router-dom";

class RouteWithSubRoutes extends Component {
    constructor(props) {
        super(props);


    }
    componentDidMount() {
        //this.props.handleLoading(true);
    }
    render() {

        var C = this.props.component;

        return (
            <Route
                path={this.props.path}
                component={(props) => <C
                    data={this.props.data}
                    {...props}
                    {...this.props} />}
            />
        );
    }
}

export default RouteWithSubRoutes;