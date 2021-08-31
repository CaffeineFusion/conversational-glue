const { ON_MESSAGE } = require('./constants');

const createRouteReducer = (initialState) => { 
    return (state=initialState, action) => {
        switch (action.type) {
            case ON_MESSAGE:
               return action.payload.text === undefined || action.payload.text.route === undefined ? state : action.payload.text.route.stringValue;
            default:
                return state;
        } 
    };
}

module.exports = { createRouteReducer };