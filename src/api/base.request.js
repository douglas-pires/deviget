import fetch from "cross-fetch";

const defaultInit = {
  method: "GET"
};

/**
 *
 * @param {init} init - An init file that can be overwritten defaultInit
 *
 * - Since we here are only working with one URL, there's no problem the way I implemented it. But in a more complex scenario, it could be tricky.
 */
export default function(init = defaultInit) {
  return fetch(process.env.VUE_APP_BASE_API_URL, {
    ...init,
    qs: {
      limit: 50
    }
  })
    .then(r => {
      if (r.status >= 400) {
        throw new Error(
          "Bad response from server: " + r.status + " " + r.statusText
        );
      }

      return r.json();
    })
    .then(json => {
      return json.data;
    });
}
