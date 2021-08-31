const { React, useEffect } = require('react');
const { withRouter } = require('react-router-dom');

//const changeRoute = (route) => this.props.history.push(route);
//<Redirect to={route} /> 

const RouteController = withRouter((props) => {
    useEffect(() => {
        props.history.push(activeRoute)
    }, [props.activeRoute]);
});

module.exports = { RouteController };