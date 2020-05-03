import { RequestHandler } from "express";

import RequestSession from "#utils/helpers/RequestSession";
import User from "#models/User";
import sendResponse from "#utils/http/sendResponse";

const getSession: RequestHandler = async (
    request,
    response,
    next
): Promise<void> => {
    try {
        const session = new RequestSession(request);
        const sessionUser = session.getUserFromSession();

        let user = null;

        if (sessionUser) {
            user = await User.findById(sessionUser.id);
        }

        sendResponse(response, user);
    } catch (error) {
        return next(error);
    }
};

export default getSession;