import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Bullet from 'components/Bullet';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import IBullet from 'shared/types/Bullet';
import Script from 'components/Script';
import Palette from 'material/Palette';

const useDesktopStyles = makeStyles(() => ({
    scrollbar: {
        height: 'calc(100vh - 74px)',
    },
    root: {
        minHeight: 'calc(100vh - 74px)',
        width: '100%',
        background: `linear-gradient(90deg, ${Palette.BLACK_DARK} 50%, ${Palette.BLACK_MED} 50%)`,
        color: 'white',
        overflowY: 'auto',
    },
}));

interface DesktopMainPannelProps {
    bullets: IBullet[];
}

const DesktopMainPannel = ({
    bullets,
}: DesktopMainPannelProps): ReactElement => {
    const classes = useDesktopStyles();

    return (
        <SimpleBar className={classes.scrollbar}>
            <Box data-cy="main-pannel" className={classes.root} tabIndex={0}>
                {bullets &&
                    bullets.map((b, i) => (
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
                                <Script
                                    index={i + 1}
                                    bullet={b}
                                    previousScriptLength={i * 21 + 1}
                                />
                            </Grid>
                        </Grid>
                    ))}
            </Box>
        </SimpleBar>
    );
};

export default DesktopMainPannel;
