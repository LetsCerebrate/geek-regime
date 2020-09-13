import { RequestHandler } from "express";

import querySchema from "./schemas/query";

const getPosts: RequestHandler = async (
    { query },
    response,
    next
): Promise<void> => {
    const { error } = querySchema.validate(query);

    if (error) {
        return next(error);
    }

    next();
};

export default getPosts;
