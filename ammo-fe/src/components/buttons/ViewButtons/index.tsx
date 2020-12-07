import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RequestIcon from 'assets/icons/request.svg';
import ScriptIcon from 'assets/icons/script.svg';
import useI18n from 'hooks/useI18n';
import i18n from 'types/i18n';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '64px',
        width: '25%',
        margin: '5px 0',
        textAlign: 'center',
        borderRadius: '4px',
        backgroundColor: theme.palette.secondary.dark,
        '&:active': {
            backgroundColor: theme.palette.primary.light,
        },
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.palette.primary.light,
        },
    },
    icon: {
        width: '50px',
        height: '64px',
        margin: '0 auto',
    },
}));

interface ViewButtonProps {
    icon: string;
    alt: i18n;
    uuid: i18n;
}

const ViewButton = ({ icon, alt, uuid }: ViewButtonProps): ReactElement => {
    const classes = useStyles();
    const locI18n = useI18n();

    return (
        <Box className={classes.root} data-cy={uuid}>
            <img
                data-cy={`recording-button-pause`}
                src={icon}
                alt={locI18n(alt)}
                className={classes.icon}
            />
        </Box>
    );
};

// ==================================================================================================
// ================================== BULLETS / REQUESTS VIEW =======================================
// ==================================================================================================

export const BulletsViewButton = (): ReactElement => {
    return (
        <ViewButton
            uuid="bullets-view-button"
            icon={RequestIcon}
            alt="Img.Alt.RequestIcon"
        />
    );
};

// ==================================================================================================
// ================================== BULLETS / REQUESTS VIEW =======================================
// ==================================================================================================

export const ScriptsViewButton = (): ReactElement => {
    return (
        <ViewButton
            uuid="scripts-view-button"
            icon={ScriptIcon}
            alt="Img.Alt.ScriptIcon"
        />
    );
};
