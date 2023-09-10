import { applyMiddleware, combineReducers, createStore } from "redux";
import { userCheckReducer } from "../reducers/userReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  userCheckReducer: userCheckReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userCheckReducer"],
};

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);

export default store;
