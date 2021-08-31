const { ON_MESSAGE, MESSAGE_TYPES } = require('./constants');

const createRouteReducer = (initialState) => { 
    return (state="/", action) => 
    {
        switch (action.type) {
            case ON_MESSAGE:
                if( action.type === MESSAGE_TYPES.PAYLOAD && action.route) {
                    return action.route;
                }
                return state;
            default:
                return state;
        } 
    };
}

module.exports = { createRouteReducer };