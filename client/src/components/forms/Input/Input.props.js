import { bool, func, string } from "prop-types";

export const defaultProps = {
    className: "",
    error: "",
    errorTooltipText: "",
    hasFixedTooltip: false,
    label: "",
    rootClassName: "",
    value: ""
};

export const propTypes = {
    className: string,
    error: string,
    errorTooltipText: string,
    hasFixedTooltip: bool,
    label: string,
    name: string.isRequired,
    onChange: func.isRequired,
    rootClassName: string,
    value: string
};
