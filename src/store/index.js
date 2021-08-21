import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import userIdReducer from "./reducers/userIdReducer";
import logger from 'redux-logger';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"]
}
const rootReducer = combineReducers({
    user: userIdReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(logger)));

export const persistor = persistStore(store);
export default store;