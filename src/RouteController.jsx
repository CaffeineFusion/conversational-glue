const { React, useEffect } = require('react');
//const { withRouter } = require('react-router-dom');

//const changeRoute = (route) => this.props.history.push(route);
//<Redirect to={route} /> 

const RouteController = (props) => {
    useEffect(() => {
        props.history.push(props.activeRoute)
    }, [props.activeRoute]);
};

module.exports = { RouteController };