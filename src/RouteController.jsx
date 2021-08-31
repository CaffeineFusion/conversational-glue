// Note: Attempted multiple approaches using Redirect or history. 
// Encountered multiple issues with React dependencies / etc. 


import { Redirect } from 'react-router-dom';
//withRouter
//const changeRoute = (route) => this.props.history.push(route);
//<Redirect to={route} /> 

const RouteController = (props) => {
    //console.log('ReactController', props);
    const { Router, activeRoute } = props;
    return (
        <Router>
            <Redirect to={activeRoute} />
            {props.children}
        </Router>
    );
}
    /*console.log('Rendering RouteController', props);
    useEffect(() => {
        console.log('Route Controller Effect activated', props.history, props.activeRoute);
        props.history.push(props.activeRoute)
    }, [props.activeRoute]);*/


module.exports = { RouteController };