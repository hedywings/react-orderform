import { init } from '@rematch/core';
import * as models from '../models';

const configureStore = () => {
  const store = init({
    models,
    redux: {
      rootReducers: {
        'RESET_APP': (state, action) => undefined
      }
    }
  });

  const { dispatch } = store;

  return { store, dispatch };
};

export default configureStore;