import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
import Bullet from 'components/Bullet';
import 'simplebar/dist/simplebar.min.css';
import IBullet from 'shared/types/Bullet';
import Script from 'components/Script';

const useStyles = makeStyles(() => ({
    column: {
        display: 'inline-block',
        verticalAlign: 'top',
        width: '100vw',
    },
}));

interface MobileBulletScriptRoxProps {
    index: number;
    bullet: IBullet;
}

const MobileBulletScriptRox = ({
    index,
    bullet,
}: MobileBulletScriptRoxProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box key={bullet.id}>
            <Box
                className={classes.column}
                data-cy={`main-pannel-left-grid-bullet-${bullet.id}`}
            >
                <Bullet bullet={bullet} />
            </Box>
            <Box
                className={classes.column}
                data-cy={`main-pannel-right-grid-bullet-${bullet.id}`}
            >
                <Script
                    index={index + 1}
                    bullet={bullet}
                    previousScriptLength={index * 21 + 1}
                />
            </Box>
        </Box>
    );
};

export default MobileBulletScriptRox;
