import keyMap from '../data/keyMap.js';

export const getKeyMap = (langcode = 'de-DE') => {
  return keyMap[langcode];
};

const keyMapService = {
  getKeyMap,
};

export default keyMapService;
