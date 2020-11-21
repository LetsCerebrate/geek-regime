import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

import { defaultProps, propTypes } from "./UserList.props";
import Paging from "components/Paging";
import UserPreview from "components/UserPreview";

import {
    selectCount,
    selectCurrentPage,
    selectTotalCount
} from "redux/usersPaging/usersPaging.selectors";

import { setCurrentPage } from "redux/usersPaging/usersPaging.actions";
import styles from "./UserList.module.scss";

UserList.defaultProps = defaultProps;
UserList.propTypes = propTypes;

function UserList ({
    currentPage,
    onSetCurrentPage,
    users,
    usersOnPageCount,
    totalCount
}) {
    const userElems = users.map(user => (
        <li
            className={styles.userItem}
            key={user.id}
        >
            <UserPreview {...user} />
        </li>
    ));

    return (
        <article className={styles.container}>
            {(users.length > 0)
                ? <ul className={styles.userList}>{userElems}</ul>
                : <div>Никого не нашли</div>}

            <Paging
                count={usersOnPageCount}
                currentPage={currentPage}
                setCurrentPage={onSetCurrentPage}
                totalRecords={totalCount}
            />
        </article>
    );
}

const mapStateToProps = createStructuredSelector({
    currentPage: selectCurrentPage,
    usersOnPageCount: selectCount,
    totalCount: selectTotalCount
});

const mapDispatchToProps = (dispatch) => ({
    onSetCurrentPage: (page) => dispatch(setCurrentPage(page))
});

const ConnectedPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserList);

export default withRouter(ConnectedPosts);