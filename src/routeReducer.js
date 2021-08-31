const { ON_MESSAGE } = require('./constants');

const createRouteReducer = (initialState) => { 
    return (state=initialState, action) => {
        console.log('Route reducer', state, action);
        switch (action.type) {
            case ON_MESSAGE:
                console.log(`Route reducer - ON_MESSAGE, ${action.payload.text === undefined}, ${action.payload.text === undefined || action.payload.text.route === undefined}`);
                return action.payload.text === undefined || action.payload.text.route === undefined ? state : action.payload.text.route;
            default:
                return state;
        } 
    };
}

module.exports = { createRouteReducer };