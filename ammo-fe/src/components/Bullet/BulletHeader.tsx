import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ToolTip from 'components/misc/ToolTip';
import IBullet from 'imported/IBullet';
import DownCarret from 'assets/down_carret.svg';
import UpCarret from 'assets/up_carret.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.light,
        padding: '2px 7px',
        display: 'flex',
        flexDirection: 'row',
        maxWidth: '100%',
    },
    methodBadge: {
        margin: '0 12px',
        padding: '0 9px',
        borderRadius: '3px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
    url: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    statusBadge: {
        margin: '0 12px',
        padding: '0 3px',
        borderRadius: '3px',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.dark,
    },
    filler: {
        flexGrow: 1,
    },
    downCarret: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
}));

export interface BulletHeaderProps {
    bullet: IBullet;
    collapse?: boolean;
    onClick: () => void;
}

const BulletHeader = ({
    bullet,
    collapse = true,
    onClick,
}: BulletHeaderProps): ReactElement => {
    const classes = useStyles();
    return (
        <Box id={`bullet-header-${bullet.id}`} className={classes.root}>
            <Box id={`bullet-header-ms-${bullet.id}`}>
                <Typography>
                    ::{new Date(bullet.date).getMilliseconds()}
                </Typography>
            </Box>
            <Box
                id={`bullet-header-method-${bullet.id}`}
                className={classes.methodBadge}
            >
                <Typography>{bullet.method.toUpperCase()}</Typography>
            </Box>
            <Box id={`bullet-header-url-${bullet.id}`} className={classes.url}>
                <Typography>{bullet.url}</Typography>
            </Box>
            <Box
                id={`bullet-header-filler-${bullet.id}`}
                className={classes.filler}
            ></Box>
            <Box
                id={`bullet-header-status-${bullet.id}`}
                className={classes.statusBadge}
            >
                <Typography>{bullet.response?.status}</Typography>
            </Box>
            <ToolTip
                id={`bullet-header-collapse-tooltip-${bullet.id}`}
                title="TODO"
            >
                <img
                    id={`bullet-header-collapse-${bullet.id}`}
                    src={collapse ? DownCarret : UpCarret}
                    alt="TODO"
                    className={classes.downCarret}
                    onClick={onClick}
                />
            </ToolTip>
        </Box>
    );
};

export default BulletHeader;
