import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./rootReducer";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    //whitelist: ['filters', 'positions'], //інформація, яку ми хочемо зберегти
    // blacklist: ['positions']  //інформація, яку ми не хочемо зберігати(протилежний whitelist)
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);