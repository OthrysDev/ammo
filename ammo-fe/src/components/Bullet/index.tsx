import React, { ReactElement, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import IBullet from 'imported/IBullet';
import BulletHeader from 'components/Bullet/BulletHeader';
import BulletDesc from 'components/Bullet/BulletDesc';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '3px 7px',
        backgroundColor: theme.palette.primary.main,
    },
    desc: {
        color: theme.palette.secondary.main,
        padding: '7px 16px 24px 16px',
        lineHeight: '24px',
    },
}));

export interface BulletProps {
    bullet: IBullet;
}

const Bullet = ({ bullet }: BulletProps): ReactElement => {
    const classes = useStyles();
    const [collapse, setCollapse] = useState(true);

    return (
        <Box id={`bullet-${bullet.id}`} className={classes.root}>
            <BulletHeader
                bullet={bullet}
                collapse={collapse}
                onClick={() => setCollapse(!collapse)}
            />

            <BulletDesc bullet={bullet} collapse={collapse} />
        </Box>
    );
};

export default Bullet;
