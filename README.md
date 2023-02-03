# Angular Task

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
    <img alt="Version" src="https://img.shields.io/badge/build-passing-brightgreen" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/OssamaRafique" target="_blank">
    <img alt="Twitter: OssamaRafique" src="https://img.shields.io/twitter/follow/OssamaRafique.svg?style=social" />
  </a>
</p>

### ✨ [Demo](https://deepersignals-angular-task.vercel.app)

### Requirements

Create an angular app to render the data coming from a backend endpoint in a tree view with search.

1. Make a tree view that renders the data provided from the Backend
    1. make each level of the tree collapsible 
2. Enable search for the view
    1. the search should be case insensitive
    2. the result should still be a tree view showing the whole path to the found result
3. You also should use the following:
    1. tailwindCss to style components
    2. state management (NgRx - component store)
    3. angular reactive forms

### Backend

Use the following mock endpoint to retrieve data.

```jsx
https://71013f65-b118-41be-9b20-f062e0e58598.mock.pstmn.io/accounts
```

The endpoint will return a multidimensional array which describes the hierarchy structure of accounts in the database. There is always one root node which contains a property called accounts which contains all the accounts belove the node. Same goes for the next nodes in the tree. The hierarchy can be **N levels** deep.

**Example of the structure:**

- deepersignals
    - apple
        - ios
        - macos
    - microsoft
        - xbox
        - windows

If a search is conducted on this structure for the term ‘*********windows’********* on screen we should see the following structure:

- deepersignals
    - microsoft
        - windows

### Submitting the task

Once you are done with the task please push your code to a git repository of your choice and share a link to it with us.
