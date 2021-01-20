import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ToolTip from 'components/misc/ToolTip';
import DownCarretIcon from 'assets/icons/down_carret.svg';
import useI18n from 'hooks/useI18n';
import Palette from 'material/Palette';
import Bullet from 'shared/types/Bullet';

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
    bullet: Bullet;
    collapse?: boolean;
    onClick: () => void;
}

const ScriptHeader = ({
    bullet,
    collapse = true,
    onClick,
}: ScriptHeaderProps): ReactElement => {
    const classes = useStyles();
    const i18n = useI18n();

    return (
        <Box data-cy={`script-header-${bullet.id}`} className={classes.root}>
            <Box data-cy={`script-header-code-${bullet.id}`}>
                <Typography>{'</>'}</Typography>
            </Box>
            <Box className={classes.filler} />
            <ToolTip
                uuid={`script-header-collapse-tooltip-${bullet.id}`}
                title={i18n(collapse ? 'Uncollapse' : 'Collapse')}
            >
                <Box onClick={onClick} onKeyDown={onClick}>
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
