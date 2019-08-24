import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';




export default function configureStore(initialState) {
    const store = createStore(
    rootReducer,
    initialState,
    compose(
      window.devToolsExtension ? window.devToolsExtension() : f => f,
      applyMiddleware(thunk, reduxImmutableStateInvariant())
    ));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }
    return store;
}
