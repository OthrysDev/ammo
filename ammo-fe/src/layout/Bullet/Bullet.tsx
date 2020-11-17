import React, { ReactElement, ReactNode } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Bullet from 'layout/Bullet/Bullet';
import IBullet from 'imported/IBullet';

interface BulletProps {
    bullet: IBullet;
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
        margin: '3px 7px',
        color: theme.palette.secondary.light,
        padding: '2px 7px',
    },
}));

const MainPannel = ({ bullet }: BulletProps): ReactElement => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography>
                ::{new Date(bullet.date).getMilliseconds()} {bullet.method} |{' '}
                {bullet.url}
            </Typography>
        </Box>
    );
};

export default MainPannel;
