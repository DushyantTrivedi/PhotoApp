import { createStore, combineReducers, applyMiddleware } from 'redux';
import photoReducer from '../reducers/photoReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers(
  { photos: photoReducer }
);

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(exampleSaga);
  return store;
}

export default configureStore;