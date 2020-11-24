import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Bullet from 'components/Bullet';
import IBullet from 'imported/IBullet';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const useStyles = makeStyles((theme) => ({
    scrollbar: {
        height: '100vh',
    },
    root: {
        minHeight: '100vh',
        width: '100%',
        background: `linear-gradient(90deg, ${theme.palette.primary.dark} 50%, ${theme.palette.primary.main} 50%)`,
        color: 'white',
        overflowY: 'auto',
    },
}));

export interface MainPannelProps {
    bullets?: IBullet[];
}

const MainPannel = ({ bullets = [] }: MainPannelProps): ReactElement => {
    const classes = useStyles();

    return (
        <SimpleBar className={classes.scrollbar}>
            <Box data-cy="main-pannel" className={classes.root}>
                {bullets.map((b) => {
                    return (
                        <Grid
                            data-cy={`main-pannel-outer-grid-bullet-${b.id}`}
                            key={b.id}
                            container
                        >
                            <Grid
                                data-cy={`main-pannel-left-grid-bullet-${b.id}`}
                                item
                                xs={6}
                            >
                                <Bullet bullet={b} />
                            </Grid>
                            <Grid
                                data-cy={`main-pannel-right-grid-bullet-${b.id}`}
                                item
                                xs={6}
                            >
                                script
                            </Grid>
                        </Grid>
                    );
                })}
            </Box>
        </SimpleBar>
    );
};

export default MainPannel;
