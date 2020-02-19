const {
  BASE_URL,
  OBJECT_ENDPOINT,
  SEARCH_ENDPOINT,
  MAX_IMAGES_TO_SHOW,
  FILTER_ARRAY,
} = require('./constants');

export function getRandomFilter() {
  const randomInt = Math.floor(Math.random() * 10);
  let filter = FILTER_ARRAY[randomInt];

  return filter;
}

export async function requestCollection(filter) {
  const searchURL = BASE_URL + SEARCH_ENDPOINT.replace(/{filter}/, filter);

  try {
    const searchResponse = await fetch(searchURL, {
      mode: 'cors'
    })
      .then((response) => response.json());

    if (searchResponse.objectIDs !== null) {
      return requestObjectsData(searchResponse);
    }
  } catch (err) {
    console.error("Couldn't request collection ...", err);
  }
}

async function requestObjectsData(searchResponse) {
  const objectIds = searchResponse.objectIDs.slice(0, MAX_IMAGES_TO_SHOW);

  const objectsURLs = objectIds.map(obj => `${BASE_URL}${OBJECT_ENDPOINT}/${obj}`
  );

  try {
    const objectData = objectsURLs.map(async url => {
      return await fetch(url, {
        mode: 'cors'
      })
        .then((response) => response.json());
    });
    return Promise.all(objectData);
  } catch (err) {
    console.error("Couldn't request object data ...", err);
  }
}