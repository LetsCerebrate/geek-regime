import { createSelector } from "reselect";

const getUsers = ({ users }) => users;

export const selectError = createSelector(
    [getUsers],
    ({ error }) => error
);

export const selectIsPending = createSelector(
    [getUsers],
    ({ isPending }) => isPending
);

export const selectPosts = createSelector(
    [getUsers],
    ({ items }) => (items?.size > 0)
        ? [...items.values()]
        : []
);

export const selectTotalCount = createSelector(
    [getUsers],
    ({ totalCount }) => totalCount
);
