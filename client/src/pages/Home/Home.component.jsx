import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Posts from "components/Posts";
import WithSpinner from "components/WithSpinner";
import { defaultProps, propTypes } from "./Home.props";
import { fetchPostsStart } from "redux/posts/posts.actions";
import { selectIsPending } from "redux/ui/ui.selectors";
import { selectPosts } from "redux/posts/posts.selectors";

Home.defaultProps = defaultProps;
Home.propTypes = propTypes;

function Home ({
    isPending,
    onFetchPostsStart,
    posts
}) {
    useEffect(() => {
        // onFetchPostsStart(); // TODO: didInvalidate checking or sth?
    }, []);

    const postsArray = Object.values(posts);

    const propsFromHome = {
        isPending,
        posts: postsArray
    };

    const HomeWithSpinner = WithSpinner(
        Posts,
        propsFromHome
    );

    return <HomeWithSpinner />;
}

const mapStateToProps = createStructuredSelector({
    isPending: selectIsPending,
    posts: selectPosts
});

const mapDispatchToProps = (dispatch) => ({
    onFetchPostsStart: () => dispatch(fetchPostsStart())
});

const ConnectedHome = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

export default ConnectedHome;
