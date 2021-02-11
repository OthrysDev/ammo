import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
import SimpleBar from 'simplebar-react';
import { useSelector } from 'react-redux';
import { RootReducer } from 'redux/reducers';
import 'simplebar/dist/simplebar.min.css';
import IBullet from 'shared/types/Bullet';
import { MainPannelView } from 'redux/reducers/uiReducer';
import Palette from 'material/Palette';
import MobileBulletScriptRow from 'components/MainPannel/MobileBulletScriptRow';

const useStyles = makeStyles(() => ({
    fullHeightMinusBar: {
        // The height of the main pannel is the full height of the window minus :
        // - 50px : the (menu) top bar
        // - 74px : the (menu) bottom bar
        height: 'calc(calc(var(--vh, 1vh) * 100) - 50px - 74px)',
    },
    scrollbar: {
        overflowX: 'hidden',
    },
    root: {
        width: '100%',
        color: 'white',
        overflowY: 'auto',
        // Because of the (menu) top bar
        marginTop: '50px',
    },
    gradientBg: {
        background: `linear-gradient(90deg, ${Palette.BLACK_DARK} 50%, ${Palette.BLACK_MED} 50%)`,
        backgroundSize: '200% 100%',
    },
    showLeftBg: {
        animation: `$slideBgLeft 300ms forwards`,
    },
    showRightBg: {
        animation: `$slideBgRight 300ms forwards`,
    },
    '@keyframes slideBgLeft': {
        '0%': {
            backgroundPosition: '100% 0%',
        },
        '100%': {
            backgroundPosition: '0% 0%',
        },
    },
    '@keyframes slideBgRight': {
        '0%': {
            backgroundPosition: '0% 0%',
        },
        '100%': {
            backgroundPosition: '100% 0%',
        },
    },
    container: {
        position: 'absolute',
        left: '-100vw',
        width: '200vw',
        height: '100%',
    },
    doubleWide: {
        width: '200vw',
    },
    showLeftPannel: {
        animation: `$slideContentLeft 300ms forwards`,
    },
    showRightPannel: {
        animation: `$slideContentRight 300ms forwards`,
    },
    '@keyframes slideContentLeft': {
        '0%': {
            left: '-100vw',
        },
        '100%': {
            left: 0,
        },
    },
    '@keyframes slideContentRight': {
        '0%': {
            left: 0,
            opacity: 0,
        },
        '100%': {
            left: '-100vw',
        },
    },
}));

interface MobileMainPannelProps {
    bullets: IBullet[];
}

const MobileMainPannel = ({ bullets }: MobileMainPannelProps): ReactElement => {
    const classes = useStyles();
    const view = useSelector((state: RootReducer) => state.ui.view);

    // Background color
    const bgClassName =
        view === MainPannelView.BULLETS
            ? classes.showLeftBg
            : classes.showRightBg;
    const pannelClassName =
        view === MainPannelView.BULLETS
            ? classes.showLeftPannel
            : classes.showRightPannel;

    return (
        <Box
            data-cy="main-pannel"
            className={`${classes.root} ${classes.gradientBg} ${bgClassName} ${classes.doubleWide} ${classes.fullHeightMinusBar}`}
            tabIndex={0}
        >
            <SimpleBar
                className={`${classes.scrollbar} ${classes.fullHeightMinusBar}`}
                forceVisible="y"
            >
                <Box
                    className={`${classes.container} ${pannelClassName} ${classes.fullHeightMinusBar}`}
                >
                    {bullets &&
                        bullets.map((b, i) => (
                            <MobileBulletScriptRow
                                key={`mobile-bullet-script-row-${b.id}`}
                                bullet={b}
                                index={i}
                            />
                        ))}
                </Box>
            </SimpleBar>
        </Box>
    );
};

export default MobileMainPannel;
