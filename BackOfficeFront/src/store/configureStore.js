/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from '../sagas';
import DevTools from '../containers/DevTools';
import { persistState } from 'redux-devtools';

const sagaMiddleware = createSagaMiddleware();

const enhacer = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&#]+)\b/
    )
  )
);

// Inicialização da Store do Redux, e aplicando a instância do Saga
export default function configureStore() {
  const store = applyMiddleware(sagaMiddleware)(createStore)(
      combineReducers({
        reducers
      }),
      enhacer
    );

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    );
  }
  
  sagaMiddleware.run(rootSaga);
  return store;
}
