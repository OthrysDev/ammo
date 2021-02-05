import React, { ReactElement, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
import BulletHeader from 'components/Bullet/BulletHeader';
import BulletDesc from 'components/Bullet/BulletDesc';
import IBullet from 'shared/types/Bullet';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        margin: '2px 2px 0',
        backgroundColor: Palette.BLACK_MED,
    },
    desc: {
        color: Palette.WHITE,
        padding: '7px 16px 24px 16px',
        lineHeight: '24px',
    },
}));

export interface BulletProps {
    bullet: IBullet;
}

const Bullet = ({ bullet }: BulletProps): ReactElement => {
    const classes = useStyles();
    const [collapse, setCollapse] = useState<boolean>(true);

    const toggleCollapse = (): void => setCollapse((prevState) => !prevState);

    return (
        <Box className={classes.root}>
            <BulletHeader
                bullet={bullet}
                collapse={collapse}
                onClick={toggleCollapse}
            />

            <BulletDesc bullet={bullet} collapse={collapse} />
        </Box>
    );
};

export default Bullet;
