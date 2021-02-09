import React, { ReactElement } from 'react';
import Box from 'material/Box';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecIcon from 'assets/icons/rec.svg';
import PauseIcon from 'assets/icons/pause.svg';
import useI18n from 'hooks/useI18n';
import { RootReducer } from 'redux/reducers';
import useUIActions from 'redux/actions/useUIActions';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        width: '100px',
        height: '74px',
        overflow: 'hidden',
    },
    off: {
        filter: 'grayscale(100%) !important',
        '&:hover': {
            filter: 'grayscale(0%)',
        },
    },
    insideGutter: {
        height: '64px',
        width: '90px',
        margin: '5px auto',
        backgroundColor: Palette.BLACK_MED,
        borderRadius: '3px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    insideButton: {
        height: '44px',
        width: '70px',
        backgroundColor: Palette.BLUE_DARK,
        borderRadius: '3px',
        '&:hover': {
            backgroundColor: Palette.BLUE_MED,
            cursor: 'pointer',
            margin: '9px auto',
        },
    },
    icon: {
        display: 'block',
        margin: '0 auto',
        width: '44px',
        height: '44px',
        color: 'red',
    },
    disabled: {
        '& *': {
            filter: 'grayscale(.4)',
        },
    },
}));

const RecorderButton = (): ReactElement => {
    const classes = useStyles();
    const i18n = useI18n();
    const { toggleRecorderButtonAction } = useUIActions();
    const recorderButtonToggled = useSelector(
        (state: RootReducer) => state.ui.recorderButtonToggled
    );

    const toggleRecorderButton = (): void => {
        toggleRecorderButtonAction(!recorderButtonToggled);
    };

    let buttonClassname = classes.insideButton;
    // Not recording : button is greyed out
    if (!recorderButtonToggled) buttonClassname += ` ${classes.off}`;

    return (
        <Box className={classes.root}>
            <Box className={classes.insideGutter}>
                <Button
                    data-cy="recorder-button"
                    className={buttonClassname}
                    onClick={toggleRecorderButton}
                >
                    {recorderButtonToggled ? (
                        <img
                            data-cy="recording-button-pause"
                            src={PauseIcon}
                            alt={i18n('Img.Alt.PauseIcon')}
                            className={classes.icon}
                        />
                    ) : (
                        <img
                            data-cy="recording-button-record"
                            src={RecIcon}
                            alt={i18n('Img.Alt.RecordIcon')}
                            className={classes.icon}
                        />
                    )}
                </Button>
            </Box>
        </Box>
    );
};

export default RecorderButton;
