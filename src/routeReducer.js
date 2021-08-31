const { ON_MESSAGE } = require('./constants');

const createRouteReducer = (initialState) => { 
    return (state=initialState, action) => 
    {
        switch (action.type) {
            case ON_MESSAGE:
                if(action.payload && action.payload.entry && action.payload.entry.type === "payload"  ) {
                    const { text } = action.payload.entry;
                    return {...state, ...(text && { activeRoute: action.payload.entry.text })};
                }
                return state;
            default:
                return state;
        } 
    };
}

module.exports = { createRouteReducer };