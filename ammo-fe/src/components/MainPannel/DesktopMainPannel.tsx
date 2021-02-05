import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import IBullet from 'shared/types/Bullet';
import Palette from 'material/Palette';
import DesktopBulletScriptRow from 'components/MainPannel/DesktopBulletScriptRow';

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
                        <DesktopBulletScriptRow
                            key={`desktop-bullet-script-row-${b.id}`}
                            bullet={b}
                            index={i}
                        />
                    ))}
            </Box>
        </SimpleBar>
    );
};

export default DesktopMainPannel;
