import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userCheckReducer } from "../reducers/userReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import { giwaReducer } from "../reducers/giwaReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  userCheckReducer: userCheckReducer,
  giwaReducer: giwaReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userCheckReducer"],
};

const enhancers = compose(applyMiddleware(thunk));

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  enhancers
);

export const persistor = persistStore(store);

export default store;
