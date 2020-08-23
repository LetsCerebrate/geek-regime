import {
    ALREADY_EXISTS,
    INTERNAL_SERVER_ERROR,
    INVALID_CREDENTIALS,
    INVALID_PASSWORD,
    NOT_FOUND
} from "utils/const/validationErrors";

import { POST_ERROR, USER_ERROR } from "utils/const/errorNames";

function translateError (error) {
    if (!error) {
        return "";
    }

    const { message, name } = error;

    if (name === POST_ERROR) {
        return translatePostError(message);
    } else if (name === USER_ERROR) {
        return translateUserError(message);
    } else {
        return translateCommonError(message);
    }
}

export default translateError;

function translatePostError (message) {
    switch (message) {
        case ALREADY_EXISTS:
            return "Статья с таким ID уже есть";
        case NOT_FOUND:
            return "Статья не найдена";
        default:
            return message;
    }
}

function translateUserError (message) {
    switch (message) {
        case ALREADY_EXISTS:
            return "Такой email уже занят";
        case INVALID_CREDENTIALS:
            return "Неверные учетные данные";
        case INVALID_PASSWORD:
            return "Неверный пароль";
        default:
            return message;
    }
}

function translateCommonError (message) {
    switch (message) {
        case INTERNAL_SERVER_ERROR:
            return "Что-то пошло не так";
        default:
            return message;
    }
}
