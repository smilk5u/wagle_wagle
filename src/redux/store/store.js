import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { userReducer } from "../reducers/userReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";
import { giwaReducer } from "../reducers/giwaReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  giwaReducer: giwaReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userReducer"],
};

const enhancers = compose(applyMiddleware(thunk));

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  enhancers
);

export const persistor = persistStore(store);

export default store;
