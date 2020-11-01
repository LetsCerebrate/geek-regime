import { RequestHandler } from "express";
import status from "http-status";

import { NOT_FOUND } from "#utils/const/validationErrors";
import Post from "#models/Post";
import PostError from "#utils/errors/PostError";

// TODO: do I need it?
// add isAuthed to postPost
// formatPropsAndInstantiate - rename

const getPost: RequestHandler = async (
    { ip, params },
    response,
    next
): Promise<void> => {
    const { id } = params;
    console.log(id, typeof id)
    try {
        const post = await Post.findById(+id);

        if (!post) {
            throw new PostError(NOT_FOUND, status.NOT_FOUND, ip);
        }

        next();
    } catch (error) {
        next(error);
    }
};

export default getPost;
