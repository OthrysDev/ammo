import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RecorderButton from 'components/buttons/RecorderButton';
import {
    BulletsViewButton,
    ScriptsViewButton,
} from 'components/buttons/ViewButtons';
import { MainPannelView } from 'redux/reducers/uiReducer';
import useUIActions from 'redux/actions/useUIActions';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        height: '74px',
        width: '100%',
        backgroundColor: Palette.BLACK_LIGHT,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'space-evenly',
    },
}));

const MobileBar = (): ReactElement => {
    const classes = useStyles();
    const { changeMainPannelAction } = useUIActions();

    const onSelectView = (view: MainPannelView): void => {
        changeMainPannelAction(view);
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
