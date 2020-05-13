import React from "react";

import { Bookmark as BookmarkIcon } from "components/Icon";
import IconButton from "components/BaseIconButton";
import { defaultProps, propTypes } from "../IconButton.props";

BookmarkIconButton.defaultProps = defaultProps;
BookmarkIconButton.propTypes = propTypes;

function BookmarkIconButton ({ onClick, size, ...rest }) {
    return (
        <IconButton
            {...rest}
            onClick={onClick}
            size={size}
            title="Закладки"
        >
            <BookmarkIcon size={size} />
        </IconButton>
    );
}

export default BookmarkIconButton;
