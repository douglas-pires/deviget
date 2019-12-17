# DEVIGET Front-end Test

## Application on Heroku:
https://deviget-front-end-assignment.herokuapp.com/

This has the following structure:

```
├───api
├───components
│   └───dev-post-details
├───plugins
├───router
│   └───routes
├───services
├───store
│   └───modules
│       └───posts
├───style
└───views
```

And here it goes an overview about each tree branch:

`api`: Anything related to API config. In this case, I decided to add a `base.request.js` containing a handler to get information in an easier way from `fetch` function.

`components`: The default Vue structure to store components. This case, I am using a folder for each component and the main component structure is wrapped in a `index.vue` file. I am using this approach mainly because I can import directly by calling the folder's path. But in more complex cases, when you need to break a component into smaller pieces, you can take advantage from this architecture to get easier to the main component at a glance.

`plugins`: The default Vue structure to store plugins. Some implementation details about the `$device` prototype helper can be found in `plugins/device.js`

`router`: The default Vue structure to store router. For this case, I did the code splitting to reduce bundle size. In this case it would not do much gain, but in larger applications it could save the day.

`services`: Here we store all API calls. Anything that calls an API or do a HTTP request, I store here.

`store`: The default Vue structure to store the state management (`Vuex`). In this case I used a modular structure, which is an over-engineering for this case, but I used this approach just to show a nice way to handle store and separate the responsability of each `Vuex` part (`actions`, `mutations`, `state`, and so on...). The approach I used is a little bit more verbose than the used in Vuex documentation (they used it only for mutations there), but in more complex cases, when you have to search for a `mutation` or `action`, you can find it more easily just looking for its types (and because it's an awful practice to hard code strings throughout the application).

`style`: This is here just for demonstration purposes. I usually use `stylus` as a pre-processor, but in this case I am using `scss` just to play with something different. In this case, I wrote an implementation of a helper to add `margin-{x}` to any element. But it could be virtually anything.

`views`: The default Vue structure to store views.

## Additional notes

### Tests

Although not requested, I created some tests because I think it's crucial.

The tests folder contain the following structure:

```
└───unit
    ├───components
    └───store
```

`unit/components`: As the name says, I am testing components functionalities.
`unit/store`: As the name says again, I am testing store functionality.

I didn't implement anything for `e2e` tests, but it could be done easily with `Nightwatch` or something better (in my humble opinion) such as `Gauge + Taiko`

### CSS Style

Since I used some `Vuetify` functionalities, I used built-in class helpers that assisted me throughout the assignment. Besides that, for general purposes, I've commonly used BEM (Block Element Modifier) methodology in order to improve the components readability.

### Thanks notes

Well, thank you for the interest in my profile. I am really grateful! :D
