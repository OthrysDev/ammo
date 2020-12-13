import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecorderButton from 'components/buttons/RecorderButton';
import {
    BulletsViewButton,
    ScriptsViewButton,
} from 'components/buttons/ViewButtons';
import { useDispatch } from 'react-redux';
import { UIReducerActionType, MainPannelView } from 'redux/reducers/uiReducer';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '74px',
        width: '100%',
        backgroundColor: theme.palette.secondary.dark,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
}));

const MobileBar = (): ReactElement => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const onSelectView = (view: MainPannelView): void => {
        dispatch({
            type: UIReducerActionType.CHANGE_MAIN_SELECTED_PANNEL,
            view,
        });
    };

    return (
        <Box className={classes.root} boxShadow={2} data-cy="bar">
            <BulletsViewButton
                onClick={(): void => onSelectView(MainPannelView.BULLETS)}
            />
            <RecorderButton />
            <ScriptsViewButton
                onClick={(): void => onSelectView(MainPannelView.SCRIPTS)}
            />
        </Box>
    );
};

export default MobileBar;
