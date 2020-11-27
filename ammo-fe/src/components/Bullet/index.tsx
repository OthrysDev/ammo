import React, { ReactElement, useMemo, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import BulletHeader from 'components/Bullet/BulletHeader';
import BulletDesc from 'components/Bullet/BulletDesc';
import { Bullet as IBullet } from 'shared/types/Bullet';

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
    const [collapse, setCollapse] = useState<boolean>(true);

    const toggleCollapse = (): void => setCollapse((prevState) => !prevState);

    return useMemo(() => {
        return (
            <Grow in>
                <Box data-cy={`bullet-${bullet.id}`} className={classes.root}>
                    <BulletHeader
                        bullet={bullet}
                        collapse={collapse}
                        onClick={toggleCollapse}
                    />

                    <BulletDesc bullet={bullet} collapse={collapse} />
                </Box>
            </Grow>
        );
    }, [bullet, collapse]);
};

export default Bullet;
