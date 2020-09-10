import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "store/reducers";
import rootSaga from "store/sagas";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

export default function configureStore(): any {
	const sagaMiddleware = createSagaMiddleware();
	const composeEnhancers =
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
	const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
	const store = createStore(rootReducer, enhancer);
	sagaMiddleware.run(rootSaga);
	return store;
}
