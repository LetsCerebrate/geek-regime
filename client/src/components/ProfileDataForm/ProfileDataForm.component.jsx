import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { EMAIL, NAME } from "utils/const/userData";
import BaseButton from "components/BaseButton";
import Input from "components/Input";
import { defaultProps, propTypes } from "./ProfileDataForm.props";
import { resetUserError, updateProfileStart } from "redux/user/user.actions";
import { selectCurrentUser, selectUserError } from "redux/user/user.selectors";
import { validateEmail, validateName } from "utils/validators/Validator";
import formatReducerError from "utils/helpers/formatReducerError";
import styles from "./ProfileDataForm.module.scss";
import useAuthentication from "utils/hooks/useAuthentication.jsx";

ProfileDataForm.defaultProps = defaultProps;
ProfileDataForm.propTypes = propTypes;

function ProfileDataForm ({
    currentUser,
    onResetUserError,
    onUpdateProfileStart,
    userError
}) {
    const initialProps = {
        email: currentUser?.email,
        id: currentUser?.id,
        name: currentUser?.name
    };

    const initialErrors = {
        name: "",
        ...formatReducerError(userError, ["email"])
    };

    const validateProp = (stateName, props) => {
        const { email, name } = props;

        switch (stateName) {
            case EMAIL:
                return validateEmail(email);
            case NAME:
                return validateName(name);
            default:
                return null;
        }
    };

    const useAuthenticationOptions = {
        initialErrors,
        initialProps,
        resetReducerError: onResetUserError,
        sendProps: onUpdateProfileStart,
        validateProp
    };

    const {
        props,
        errors,
        handleInputChange,
        handleSubmit
    } = useAuthentication(useAuthenticationOptions);

    const { email, name } = props;

    const {
        email: emailError,
        name: nameError
    } = errors;

    useEffect(() => {
        return () => onResetUserError();
    }, [onResetUserError]);

    return (
        <form
            className={styles.container}
            onSubmit={handleSubmit}
        >
            <Input
                error={nameError}
                label="Имя"
                name={NAME}
                onChange={handleInputChange}
                type="text"
                value={name}
            />

            <Input
                error={emailError}
                label="Email"
                name={EMAIL}
                onChange={handleInputChange}
                type="email"
                value={email}
            />

            <BaseButton
                className={styles.updateProfileDataButton}
                theme="dark"
                title="Сохранить"
            />
        </form>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    userError: selectUserError
});

const mapDispatchToProps = (dispatch) => ({
    onResetUserError: () => dispatch(resetUserError()),
    onUpdateProfileStart: (params) => dispatch(updateProfileStart(params))
});

const ConnectedProfileDataForm = connect(
    mapStateToProps,
    mapDispatchToProps
)(ProfileDataForm);

export default ConnectedProfileDataForm;
