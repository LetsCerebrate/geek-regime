import { createSelector } from "reselect";

const getPosts = ({ posts }) => posts;
const getPostId = (state, postId) => postId;
const getUserId = (state, userId) => userId;

export const selectError = createSelector(
    [getPosts],
    ({ error }) => error
);

export const selectPostById = createSelector(
    [getPosts, getPostId],
    ({ items }, postId) => {
        return items.get(postId);
    }
);

export const selectPosts = createSelector(
    [getPosts],
    ({ items }) => (items?.size > 0)
        ? [...items.values()]
        : []
);

export const selectUserPosts = createSelector(
    [getPosts, getUserId],
    ({ items }, userId) => {
        const userPosts = [];

        items.forEach(post => {
            if (post.userId === userId) {
                userPosts.push(post);
            }
        });

        return userPosts;
    }
);
