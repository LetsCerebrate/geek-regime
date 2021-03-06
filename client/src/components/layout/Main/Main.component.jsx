import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ERROR, SUCCESS } from "utils/const/notificationProps";
import Popup from "components/ui/Popup";
import { defaultProps, propTypes } from "./Main.props";
import { hideNotification } from "redux/ui/ui.actions";
import { selectNotification } from "redux/ui/ui.selectors";
import styles from "./Main.module.scss";

Main.defaultProps = defaultProps;
Main.propTypes = propTypes;

function Main ({ children, onHideNotification, notification }) {
    const didErrorOccur = notification?.type === ERROR;

    const popupTheme = (didErrorOccur)
        ? ERROR
        : SUCCESS;

    return (
        <main className={styles.container}>
            <section className={styles.content}>
                {children}
            </section>

            {Boolean(notification) && (
                <Popup
                    onClose={onHideNotification}
                    text={notification.text}
                    theme={popupTheme}
                    timeoutInMs={notification.timeoutInMs}
                />
            )}
        </main>
    );
}

const mapStateToProps = createStructuredSelector({
    notification: selectNotification
});

const mapDispatchToProps = (dispatch) => ({
    onHideNotification: () => dispatch(hideNotification())
});

const ConnectedMain = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default ConnectedMain;
