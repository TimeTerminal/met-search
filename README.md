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

I opted to show the image's details when hovering on an image card instead of onclick to maintain a design consistency.

The chosen theme, colours, and animations try to follow a more contemporary look for displaying and interacting with the search and images. Inspiration drawn from and The Met's main website and Apple's various sites.

To make the page seem like it came from the same parent website, the header design attempts to match the Met's API Github page's header design.

### Structure

- `constants.js` - Endpoints as global variables, as well as an array of pre-selected queries
- `helpers.js` - The data fetching functions as well as a utility function
- `index.scss` - SASS based styling with the theme variables on top

Components

- `Content.js` - The main search component with which calls some custom hooks
- `Piece.js` - A higher order component for each of the image cards

Hooks

- `useDebouncer.js` - A custom hook which debounces the passed in search function. Because of its asynchronous nature, I opted not to use lodash or underscore's debounce methods. This function uses a setTimeout and associates a unique id to it whenever the async request goes out. If the filter (i.e query string) changes, the function increments that id again. If it is the latest (greatest) id, it will resolve the promise with the results of that request and the data is passed back to the callback function.

## Expanding the project

- Make it more mobile-friendly. Although the design was built to be responsive on conception, the hover effect wouldn't work unless one had a mouse
- Show multiple pages of results with pagination (or never ending scrolling)
- Lazy load images to better the performance of the page
- Make the search more customizable and robust through the following:
  - The ability to see Highlights, or pieces on display only
  - Subfiltering by date range, geolocation, and per-department search
- Show potential search suggestions when the user is typing through a look-ahead procedure
