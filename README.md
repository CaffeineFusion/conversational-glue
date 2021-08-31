# conversational-glue
Conversation-first libraries for website construction 

Conversational-glue provides hooks to integrate conversational interfaces into the core of your website.

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