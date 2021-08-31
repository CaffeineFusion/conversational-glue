const { Redirect } = require('react-router-dom');

const changeRoute = (route) => <Redirect to={route} /> 

module.exports = { changeRoute };