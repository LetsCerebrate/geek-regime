import { put } from "redux-saga/effects";

import * as actions from "./session.actions";
import * as api from "utils/api/session";
import getErrorFromResponse from "utils/helpers/getErrorFromResponse";

export function * doCheckSession () {
    try {
        const currentUser = yield api.checkSession();
        yield put(actions.checkSessionSuccess(currentUser));
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.checkSessionFailure(error));
    }
}

export function * doSignIn ({ cb, payload }) {
    try {
        const currentUser = yield api.signIn(payload);
        yield put(actions.signInSuccess(currentUser));
        if (cb) cb();
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.signInFailure(error));
    }
}

export function * doSignOut ({ cb }) {
    try {
        yield api.signOut();
        yield put(actions.signOutSuccess());
        if (cb) cb();
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.signOutFailure(error));
    }
}

export function * doSignUp ({ payload, cb }) {
    try {
        const currentUser = yield api.signUp(payload);
        yield put(actions.signUpSuccess(currentUser));
        if (cb) cb();
    } catch (errorResponse) {
        const error = getErrorFromResponse(errorResponse);
        yield put(actions.signUpFailure(error));
    }
}
