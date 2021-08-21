import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import userIdReducer from "./reducers/userIdReducer";
import logger from 'redux-logger';
import thunk from "redux-thunk";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
}
const rootReducer = combineReducers({
    user: userIdReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export const persistor = persistStore(store);
export default store;