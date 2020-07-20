import mocks from './mocks';

export const loadFakeJSONComponents = () => new Promise((resolve, reject) => {
  return resolve(mocks);
});
