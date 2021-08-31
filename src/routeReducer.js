const { ON_MESSAGE } = require('./constants');

const createRouteReducer = (initialState) => { 
    return (state=initialState, action) => 
    {
        switch (action.type) {
            case ON_MESSAGE:
                return action.text === undefined || action.text.route === undefined ? state : action.text.route;
            default:
                return state;
        } 
    };
}

module.exports = { createRouteReducer };