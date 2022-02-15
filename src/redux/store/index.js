import { createStore, combineReducers, applyMiddleware  } from "redux";
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cart from "../reducer/cart";
import wl from "../reducer/wishList";
import history from "../reducer/history";
import rate from "../reducer/rate";
import user from "../reducer/user";
import {rootSaga} from '../saga/index'

const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  cart,
  wl,
  history,
  rate,
  user
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

