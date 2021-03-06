import React, { ReactElement } from 'react';
import Box from 'material/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import RequestIcon from 'assets/icons/request.svg';
import ScriptIcon from 'assets/icons/script.svg';
import useI18n from 'hooks/useI18n';
import i18n from 'types/i18n';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        height: '64px',
        width: '25%',
        margin: '5px 0',
        textAlign: 'center',
        borderRadius: '4px',
        backgroundColor: Palette.BLACK_LIGHT,
        '&:active': {
            backgroundColor: Palette.BLACK_MED,
        },
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: Palette.BLACK_MED,
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
    onClick: () => void;
}

const ViewButton = ({
    icon,
    alt,
    uuid,
    onClick,
}: ViewButtonProps): ReactElement => {
    const classes = useStyles();
    const locI18n = useI18n();

    return (
        <Box className={classes.root} data-cy={uuid} onClick={onClick}>
            <img src={icon} alt={locI18n(alt)} className={classes.icon} />
        </Box>
    );
};

// ==================================================================================================
// ================================== BULLETS / REQUESTS VIEW =======================================
// ==================================================================================================

interface BulletsViewButtonProps {
    onClick: () => void;
}

export const BulletsViewButton = ({
    onClick,
}: BulletsViewButtonProps): ReactElement => {
    return (
        <ViewButton
            onClick={onClick}
            uuid="bullets-view-button"
            icon={RequestIcon}
            alt="Img.Alt.RequestIcon"
        />
    );
};

// ==================================================================================================
// ================================== BULLETS / REQUESTS VIEW =======================================
// ==================================================================================================

interface ScriptsViewButtonProps {
    onClick: () => void;
}

export const ScriptsViewButton = ({
    onClick,
}: ScriptsViewButtonProps): ReactElement => {
    return (
        <ViewButton
            onClick={onClick}
            uuid="scripts-view-button"
            icon={ScriptIcon}
            alt="Img.Alt.ScriptIcon"
        />
    );
};
