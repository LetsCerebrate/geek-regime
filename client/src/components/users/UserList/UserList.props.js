import {
    array,
    func,
    number,
    string
} from "prop-types";

import { DEFAULT_PAGING_COUNT } from "utils/const/defaultValues";

export const defaultProps = {
    currentPage: 1,
    pathPrefix: "",
    searchTerm: "",
    totalCount: 0,
    users: [],
    usersOnPageCount: DEFAULT_PAGING_COUNT
};

export const propTypes = {
    currentPage: number,
    onSetCurrentPage: func.isRequired,
    pathPrefix: string,
    searchTerm: string,
    totalCount: number,
    users: array,
    usersOnPageCount: number
};
