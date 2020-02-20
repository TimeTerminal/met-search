## Available Scripts

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About

A frontend which consumes the Metropolitan Museum of Art API to search their collection.

Built using React with Hooks

![](public/images/image1.jpg)

### Functionality and Design Considerations

On pageload it requests a search query with a random keyword (from a predetermined list). This was done to populate the page with some interesting content a user may want to see. It does slow the initial page load down a bit, but if the purpose of the page is to showcase The Met's collection, this would be a good way to do so.

I opted to not show details on click and instead on hover of each of the cards to maintain a design consistency.

I tried to go for a more contemporary look for displaying and interacting with the search and images. And followed The Met's API page's header design to make it seem like a page from the same parent website.

### Structure

- `constants.js` contains the endpoints as well as the array with some pre-selected queries
- `helpers.js` contains the data fetching functions as well as a utility function
- `index.scss` contains the SASS based styling

Components

- `Content.js` holds the main search component with which calls some custom hooks
- `Piece.js` holds a higher order component for each of the image cards

Hooks

- `useDebouncer.js` holds the custom hook which debounces the passed in search function. Because of its asynchronous nature, I opted not to use lodash or underscore's debounce methods. This function uses a setTimeout and associates a unique id to it whenever the async request goes out. If the filter (i.e query string) changes, the function increments that id again. If it is the latest (greatest) id, it will resolve the promise with the results of that request and the data is passed back to the callback function.

## Expanding the project

- Make it more mobile-friendly. Although the design was built to be responsive on conception, the hover effect wouldn't work unless one had a mouse.
- Show multiple pages of results with pagination (or never ending scrolling)
- Lazy load images to better the performance of the page
- Make the search more customizable and robust through the following:
  - The ability to see Highlights, or pieces on display only
  - Subfiltering by date range, geolocation, and per-department search
- Show potential search suggestions when the user is typing through a look-ahead procedure
