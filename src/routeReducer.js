const { ON_MESSAGE } = require('./constants');

const createRouteReducer = (initialState) => { 
    return (state=initialState, action) => 
    {
        switch (action.type) {
            case ON_MESSAGE:
                return action.route === undefined ? state : action.route;
            default:
                return state;
        } 
    };
}

module.exports = { createRouteReducer };