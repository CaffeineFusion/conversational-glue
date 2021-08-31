import { Redirect } from 'react-router-dom';

const changeRoute = (route) => <Redirect to={route} /> 

module.exports = { changeRoute };