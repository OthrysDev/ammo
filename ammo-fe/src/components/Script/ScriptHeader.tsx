import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from 'material/Typography';
import Box from 'material/Box';
import ToolTip from 'components/misc/ToolTip';
import DownCarretIcon from 'assets/icons/down_carret.svg';
import useI18n from 'hooks/useI18n';
import Palette from 'material/Palette';
import Bullet from 'shared/types/Bullet';
import GatlingScripter from 'scripters/GatlingScripter';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: Palette.BLACK_LIGHT,
        color: Palette.WHITE,
        padding: '2px 7px',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
    },
    filler: {
        flexGrow: 1,
    },
    downCarretIcon: {
        marginTop: '6px',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    flipY: {
        transform: 'scaleY(-1)',
    },
}));

export interface ScriptHeaderProps {
    index: number;
    bullet: Bullet;
    collapse?: boolean;
    onClick: () => void;
}

const ScriptHeader = ({
    index,
    bullet,
    collapse = true,
    onClick,
}: ScriptHeaderProps): ReactElement => {
    const classes = useStyles();
    const i18n = useI18n();

    const varName = GatlingScripter.varName(index, bullet);

    return (
        <Box className={classes.root}>
            <Box>
                <Typography>{varName}</Typography>
            </Box>
            <Box className={classes.filler} />
            <ToolTip
                uuid={`script-header-collapse-button-tooltip-${bullet.id}`}
                title={i18n(collapse ? 'Uncollapse' : 'Collapse')}
            >
                <Box
                    data-cy={`script-header-collapse-button-${bullet.id}`}
                    onClick={onClick}
                    onKeyDown={onClick}
                >
                    <img
                        src={DownCarretIcon}
                        alt={i18n(
                            collapse
                                ? 'Img.Alt.DownCarretIcon'
                                : 'Img.Alt.UpCarretIcon'
                        )}
                        className={`${classes.downCarretIcon} ${
                            collapse ? '' : classes.flipY
                        }`}
                    />
                </Box>
            </ToolTip>
        </Box>
    );
};

export default ScriptHeader;
