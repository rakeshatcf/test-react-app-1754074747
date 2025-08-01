import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn()
  };
};