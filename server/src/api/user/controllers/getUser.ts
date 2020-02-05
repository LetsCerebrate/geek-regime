import { Request, Response, NextFunction } from "express";

import ApiController from "types/ApiController";
import queryText from "./getUser.query";
import makeDbQuery from "utils/makeDbQuery";

const getUser: ApiController = async function (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> {
    const { id } = request.params;

    try {
        const result = await makeDbQuery(
            "get-user",
            queryText,
            [id]
        );

        const user = result.rows[0];
        response.status(200).send(user);
    } catch (error) {
        // return next(error);
    }
};

export default getUser;
