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

## Overview - Components and Direction
Initial designs for conversational-glue envisaged the ability for a user's conversation to control the entirety of a website experience. 
Key elements to this design included:
- Conversation driven website routing (early draft) - Allow the conversation to navigate a user through a website via conversation
- Web components triggering conversation (todo) - Conversion of traditional website elements to trigger conversation via HoCs
- Dynamic web content generation based on conversation (todo)

## Usage - Conversationally driven website navigation
The following steps allow us to connect a Conversation in Dialogflow CX to our website navigation in React.
This could be used, for example, to navigate a user through a registration process based on the conversation.

Note: You'll likely want to ensure that the chat component persists between pages and that the conversation state remains bound so that the page changes _around_ the conversation. The conversation component becomes the spine of the website.

### Add custom Route Payload into Dialogflow responses as Custom payload
First, within Dialogflow CX, we tag the intents that we want to navigate around the App
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

This reducer extracts the route object from any custom payload that is returned.

Note: sample above assumes that you've already integrated message handling in a similar way to the Dialogflow CX samples using Redux. Data is assumed to follow the following structure:
```
export const sendMessage = (text, session, sender = 'user', type) => ({
    type: ON_MESSAGE,
    payload: { text, session, sender, type }
})
```
Defined on API response as follows:
```
axios.post(settings.detectintent, {
            query: action.payload.text,
            sessionid: action.payload.session
        }).then(onSuccess)
     
        function onSuccess(response) {
            response.data.response.queryResult.responseMessages.forEach(function (item, index) {
                if ('payload' in item){
                    next(sendMessage(item.payload.fields, response, 'bot', 'payload'));
                } else {
                    next(sendMessage(item.text.text, response, 'bot', 'text'));
                } 
            });
        }
```


### Add routing Controller
Finally, we add the Routing controller to our App
Requires react-router-dom and triggers a Route change based on an input function

(Note: currently this example uses the Redirect component, future direction plans to use a more robust handling via React Router history paths)

``` javascript
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
//import { RouteController } from 'conversational-glue'; // In development

// trigger the change Route method from within your React component
(props) => {
    const { activeRoute } = props;
    <BrowserRouter>
        <Redirect to={activeRoute} />
        {/* withRouter(<RouteController activeRoute={activeRoute} />) */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/two' component={SecondPage} />
    </BrowserRouter>
}

const mapStateToProps = state => ({
  activeRoute: state.route,
  feed: state.feed // feed as per the Dialogflow CX sample code base
});

```


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
- Move CX response transformation to server side component
- Create replacement Reducer for DF Sample Reducer


## License
Apache 2.0
