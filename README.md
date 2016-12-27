# rails-react-redux-hmr-boilerplate

## Motivation

I wanted to start transitioning from a full-stack Rails developer to the React-Redux environment, whilst maintining the ability to keep the front and back end all contained in a nice, single package.

Having played around with HMR (Hot Module Reloading), I knew that it had to be working in this stack, and getting it to play nicely with Rails and the asset pipeline is a little bit of a fiddle.

## The Stack

### Rails 5

The parent framework of everything is Rails 5. It uses Postgres and RSpec as the only modifications from the default install.

The idea is that you use Rails as the API only, with a single entry point to the client code.

There is a single root-route, which does nothing more than serve a page with a single div with ID 'root' for the React to hook into. I could have just put this file in `public`, and set up the Rails app as an API only app, but you have the ability to serve DB/API related info at the root of the SPA if necessary.

The application.html file includes the generated webpack bundle at the bottom of the page. This allows for the React app to be injected either via HMR during development, or the final minified version in production.

### React Redux
I'm still learning this framework, so it might not be the idiomatic way of setting up these kind of apps. I've only included the basics to give you the starting pointing to work from, and you may want to completely change this to suit your own tastes. It's as much a reference for me to remember the syntax of creating the various components.

This is the basic setup:
- *Redux* to manage the global state of the app
- *react-router-redux* to handle multiple pages within an SPA
- *redux-logger* middleware for helping out in development
- *redux-thunk* middleware for providing the ability to handle async functions in actions
- *HomeApp* a placeholder for the default route and a place to start building your app from
- *NavBar* a placeholder injected into the Home App for your main menus etc. (This structure may change once I figure out the 'best' way of doing it)

## Running the server
If you're used to running default Rails apps, starting the server is a little different to usual.

As we need WebPack running to the make the HMR work in development mode, `Foreman` is used to simultaneously start both servers.

The command to get the dev server running is:

```
foreman start -f Procfile.dev
```