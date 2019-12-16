# DEVIGET Front-end Test

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

And here it goes an explanation for each tree branch:

`api`: Anything related to API config. In this case, I decided to add a `base.request.js` containing a handler to get information in a easier way from `fetch` function.

`components`: The default Vue structure to store components. This case, I am using a folder for each component and the main component structure is wrapped in a `index.vue` file. I am using this approach mainly because I can import directly by calling the folder's path. But in more complex cases, when you need to break a component into smaller pieces, you can take advantage from this architecture to get easier to the main component at a glance.

`plugins`: The default Vue structure to store plugins.

`router`: The default Vue structure to store router. For this case, I did the code splitting to reduce bundle size. In this case it would not do much gain, but in larger applications it could save the day.

`services`: Here we store all API calls. Anything that calls an API or do a HTTP request, I store here.

`store`: The default Vue structure to store the state management (`Vuex`). In this case I used a modular structure, which is an over-engineering case. I used this approach just to show a nice way to handle store and separate the responsability of each type `Vuex` part (`actions`, `mutations`, `state`, and so on...). The approach I used is a little bit more verbose than the used in Vuex documentation (they used it only for mutations there), but in more complex cases, when you have to search for a `mutation` or `action`, you can find it more easily just looking for its types (and because it's an awful practice to hard code strings throughout the application).

`style`: This is here just for demonstration purposes. I usually use `stylus` as a pre-processor, but in this case I am using `scss` just to play with something different. In this case, I wrote an implementation of a helper to add `margin-{x}` to any element. But it could be virtually anything.

`views`: The default Vue structure to store views.

## Additional notes

Although not requested, I created some tests because I think it's crucial.

The tests folder contain the following structure:

```
└───unit
    ├───components
    └───store
```

`unit/components`: As the name says, I am testing components functionalities.
`unit/store`: As the name says again, I am testing store functionality.

## Thanks notes

Well, thank you for the interest in my profile. I am really grateful! :D
