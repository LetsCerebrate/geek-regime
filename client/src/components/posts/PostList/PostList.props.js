import {
    array,
    bool,
    func,
    number,
    object,
    string
} from "prop-types";

import { DEFAULT_PAGING_COUNT } from "utils/const/defaultValues";

export const defaultProps = {
    currentPage: 1,
    currentUser: null,
    hasSearchTerm: false,
    pathPrefix: "",
    posts: [],
    postsOnPageCount: DEFAULT_PAGING_COUNT
};

export const propTypes = {
    currentPage: number,
    currentUser: object,
    hasSearchTerm: bool,
    onSetCurrentPage: func.isRequired,
    pathPrefix: string,
    posts: array,
    postsOnPageCount: number
};
