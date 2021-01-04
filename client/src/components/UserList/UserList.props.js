import { array, func, number } from "prop-types";

export const defaultProps = {
    currentPage: 1,
    users: [],
    usersOnPageCount: 20
};

export const propTypes = {
    currentPage: number,
    onSetCurrentPage: func.isRequired,
    users: array,
    usersOnPageCount: number
};
