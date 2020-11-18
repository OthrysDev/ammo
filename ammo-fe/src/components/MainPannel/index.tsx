import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Bullet from 'components/Bullet';
import IBullet from 'imported/IBullet';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100%',
        background: `linear-gradient(90deg, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 50%)`,
        color: 'white',
    },
}));

export interface MainPannelProps {
    bullets?: IBullet[];
}

const MainPannel = ({ bullets = [] }: MainPannelProps): ReactElement => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            {bullets.map((b) => {
                return (
                    <Grid container key={b.date.toString()}>
                        <Grid item xs={6}>
                            <Bullet bullet={b} />
                        </Grid>
                        <Grid item xs={6}>
                            script
                        </Grid>
                    </Grid>
                );
            })}
        </Box>
    );
};

export default MainPannel;
