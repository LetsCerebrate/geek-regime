import { put } from "redux-saga/effects";

import * as actions from "./users.actions";
import * as api from "utils/api/users";

import getErrorFromResponse from "utils/helpers/getErrorFromResponse";

export function * doFetchUser ({ payload: id }) {
    try {
        const item = yield api.fetchUser(id);
        yield put(actions.fetchUserSuccess(item));
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.fetchUserFailure(error));
    }
}

export function * doFetchUsers ({ payload }) {
    try {
        const itemsWithPagingOpts = yield api.fetchUsers(payload);
        yield put(actions.fetchUsersSuccess(itemsWithPagingOpts));
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.fetchUsersFailure(error));
    }
}

export function * doUpdateUser ({ cb, payload }) {
    try {
        const user = yield api.updateUser(payload);
        yield put(actions.updateUserSuccess(user));
        if (cb) cb();
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.updateUserFailure(error));
    }
}

export function * doUpdateUserPicture ({ cb, payload }) {
    try {
        const user = yield api.updateUserPicture(payload);
        yield put(actions.updateUserPictureSuccess(user));
        if (cb) cb();
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.updateUserPictureFailure(error));
    }
}
