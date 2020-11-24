import React, { ReactElement, useMemo, useState } from 'react';
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

    const toggleCollapse = () => setCollapse((prevState) => !prevState);

    return useMemo(() => {
        return (
            <Box id={`bullet-${bullet.id}`} className={classes.root}>
                <BulletHeader
                    bullet={bullet}
                    collapse={collapse}
                    onClick={toggleCollapse}
                />

                <BulletDesc bullet={bullet} collapse={collapse} />
            </Box>
        );
    }, [bullet, collapse]);
};

export default Bullet;
