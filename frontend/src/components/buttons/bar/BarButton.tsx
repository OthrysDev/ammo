import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Palette from 'material/Palette';
import useI18n from 'hooks/useI18n';
import ToolTip from 'components/misc/ToolTip';

const useStyles = makeStyles(() => ({
    root: {
        width: '40px !important',
        minWidth: '40px !important',
        borderRadius: 0,
        height: 40,
        opacity: 0.7,
        backgroundColor: Palette.BLACK_MED,

        '&:hover': {
            opacity: 0.9,
            backgroundColor: Palette.BLACK_LIGHTER,
            cursor: 'pointer',
        },
    },
    icon: {
        marginTop: 7,
        marginLeft: -3,
        width: 40,
        height: 40,
    },
}));

interface BarButtonProp {
    uuid: string;
    icon: string;
    onClick: () => void;
}

const BarButton = ({ uuid, icon, onClick }: BarButtonProp): ReactElement => {
    const classes = useStyles();
    const locI18n = useI18n();

    return (
        <ToolTip
            uuid={`${uuid}-button`}
            title={locI18n(`Bar.Btn.Tooltip.${uuid}`)}
        >
            <Button
                className={classes.root}
                data-cy={`${uuid}-button`}
                onClick={onClick}
            >
                <img
                    src={icon}
                    alt={locI18n(`Bar.Btn.Img.Alt.${uuid}`)}
                    className={classes.icon}
                />
            </Button>
        </ToolTip>
    );
};

export default BarButton;
