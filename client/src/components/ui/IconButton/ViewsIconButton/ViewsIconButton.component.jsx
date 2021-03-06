import React from "react";

import { Views as ViewsIcon } from "components/ui/Icon";
import IconButton from "components/ui/BaseIconButton";
import { defaultProps, propTypes } from "../IconButton.props";

ViewsIconButton.defaultProps = defaultProps;
ViewsIconButton.propTypes = propTypes;

function ViewsIconButton ({ onClick, size, ...rest }) {
    return (
        <IconButton
            {...rest}
            onClick={onClick}
            size={size}
            title="Число просмотров"
        >
            <ViewsIcon size={size} />
        </IconButton>
    );
}

export default ViewsIconButton;
