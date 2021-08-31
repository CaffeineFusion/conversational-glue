# conversational-glue
Conversation-first libraries for website construction 

Conversational-glue provides hooks to integrate conversational interfaces into the core of your website. Currently integrates via redux to react-router-dom.

First iteration is focused on updating application state from Dialogflow. 
Future iterations will look at wrapping existing components to shift existing interface components to a conversationally augmented flow (eg. clicking a website button corresponds to a conversational turn) and binding additional page elements to conversational context.

## Installation
Use the package manager npm/yarn to install conversational-glue

```bash
yarn add conversational-glue
```

### Requirements
- react-router
- redux

## Usage

### Add custom Route Payload into Dialogflow responses as Custom payload
First, we tag the intents that we want to navigate around the App
```javascript
{"route": "/my_target_route"}
```

### Connect reducer
Secondly, we connect our routing reducer to our Redux store:
```javascript
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { createRouteReducer } from 'conversational-glue';

export const store = createStore(
    combineReducers({feed: messageReducer, route: createRouteReducer(initState)}), 
    applyMiddleware(messageMiddleware));
```

Note: sample above assumes that you've already integrated message handling in a similar way to the Dialogflow CX samples using Redux


### Add routing Controller
Finally, we add the Routing controller to our App
Requires react-router-dom, triggers a Route change based on an input function
``` javascript
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { RouteController } from 'conversational-glue';

// trigger the change Route method from within your React component
class App extends Component {
    render = () => {
        <BrowserRouter>
            { activeRoute && <RouteController activeRoute={activeRoute} />}
            <Route exact path='/' component={HomePage} />
            <Route exact path='/two' component={SecondPage} />
        </BrowserRouter>
    }
}

const mapStateToProps = state => ({
  activeRoute: state.route,
  feed: state.feed // feed as per the Dialogflow CX sample code base
});

```


## License
Apache 2.0

## Why? Conversation First Design
Typical conversation integration to websites involves bolting on a new component to an existing build. This is typically isolated from the core workings of the website, and the experience is limited to the container within which the chat is surfaced and uses backend integrations to peform any interactions.

But what if Conversation drove the entire experience of the website?

The experience could be more immersive, and open up new ways of engaging with the content. 

## How? 
This initial prototype allows you to connect Dialogflow CX via Redux to a React based router. 

## Additional considerations / Principles
- SEO - Search Engines should be able to index and understand your website _as if_ it were a conventional website
- Accessibility - The Conversational design should improve accessibility and not inhibit existing approaches to accessbility such as support for screen readers
- Graceful Failure - Fallback navigation and content if the conversation integration is unavailable

## Todo:
- Setup CICD
    - Testing Harness
    - Demo deployment
- Action types
    - Navigation
    - Model transforms
- Dynamic Routing - Dynamic Fulfilment -> Dynamic Routes
- HoC for Attaching suggested utterances to buttons