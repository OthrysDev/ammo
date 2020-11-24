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
        <Box id="main-pannel" className={classes.root}>
            {bullets.map((b) => {
                return (
                    <Grid
                        id={`main-pannel-outer-grid-bullet-${b.id}`}
                        container
                        key={b.id}
                    >
                        <Grid
                            id={`main-pannel-left-grid-bullet-${b.id}`}
                            item
                            xs={6}
                        >
                            <Bullet bullet={b} />
                        </Grid>
                        <Grid
                            id={`main-pannel-right-grid-bullet-${b.id}`}
                            item
                            xs={6}
                        >
                            script
                        </Grid>
                    </Grid>
                );
            })}
        </Box>
    );
};

export default MainPannel;
