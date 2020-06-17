import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postReducer from "./post/post.reducer";
import sessionReducer from "./session/session.reducer";
import userReducer from "./user/user.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: [
        "user"
    ]
};

const rootReducer = combineReducers({
    post: postReducer,
    session: sessionReducer,
    user: userReducer
});

export default persistReducer(persistConfig, rootReducer);
