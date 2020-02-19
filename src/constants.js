const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1'
const OBJECT_ENDPOINT = '/objects'
const SEARCH_ENDPOINT = '/search?hasImages=true&q={filter}';

const MAX_IMAGES_TO_SHOW = 20;
const FILTER_ARRAY = ['people', 'architecture', 'fashion', 'nature', 'science', 'ancient', 'food', 'painting', 'art', 'history'];

module.exports = {
  BASE_URL,
  OBJECT_ENDPOINT,
  SEARCH_ENDPOINT,
  MAX_IMAGES_TO_SHOW,
  FILTER_ARRAY
};