import { func, object } from "prop-types";

export const defaultProps = {
    currentUser: {},
    post: {}
};

export const propTypes = {
    currentUser: object,
    history: object.isRequired,
    match: object.isRequired,
    onApprovePostStart: func.isRequired,
    onFetchPostStart: func.isRequired,
    onRejectPostStart: func.isRequired,
    onShowNotification: func.isRequired,
    onUpdatePostStart: func.isRequired,
    post: object
};
