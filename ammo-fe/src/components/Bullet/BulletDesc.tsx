import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import IBullet from 'imported/IBullet';
import {
    TitleAndKeyValuesDesc,
    TitleAndRawValueDesc,
    Delimiter,
} from 'components/Bullet/utils';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.secondary.main,
        padding: '7px 16px 24px 16px',
        lineHeight: '24px',
    },
}));

export interface BulletDescProps {
    bullet: IBullet;
    collapse?: boolean;
}

const BulletDesc = ({
    bullet,
    collapse = true,
}: BulletDescProps): ReactElement => {
    const classes = useStyles();
    return (
        <Collapse in={!collapse}>
            <Box className={classes.root}>
                <Delimiter title="Request" />
                {bullet.request.headers && (
                    <TitleAndKeyValuesDesc
                        title="Headers"
                        obj={bullet.request.headers}
                    />
                )}
                {bullet.request.body && (
                    <TitleAndRawValueDesc
                        title="Body"
                        obj={bullet.request.body}
                    />
                )}
                <Delimiter title="Response" />
                {bullet.response.headers && (
                    <TitleAndKeyValuesDesc
                        title="Headers"
                        obj={bullet.response.headers}
                    />
                )}
                {bullet.response.body && (
                    <TitleAndRawValueDesc
                        title="Body"
                        obj={bullet.response.body}
                    />
                )}
            </Box>
        </Collapse>
    );
};

export default BulletDesc;
