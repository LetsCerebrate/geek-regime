import React from "react";
import { useField } from "formik";

import { defaultProps, propTypes } from "./FormInput.props";
import Input from "../Input/Input.component";

FormInput.defaultProps = defaultProps;
FormInput.propTypes = propTypes;

function FormInput ({ label, onChange, ...props }) {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched
        ? meta.error
        : "";

    return (
        <Input
            {...field}
            error={errorText}
            label={label}
            onChange={onChange}
        />
    );
}

export default FormInput;