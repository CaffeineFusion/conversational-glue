const { React, useEffect } = require('react');
//const { withRouter } = require('react-router-dom');

//const changeRoute = (route) => this.props.history.push(route);
//<Redirect to={route} /> 

const RouteController = (props) => {
    console.log('Rendering RouteController', props);
    useEffect(() => {
        console.log('Route Controller Effect activated', props.history, props.activeRoute);
        props.history.push(props.activeRoute)
    }, [props.activeRoute]);
};

module.exports = { RouteController };