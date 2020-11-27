import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import {
    TitleAndKeyValuesDesc,
    TitleAndRawValueDesc,
    Delimiter,
} from 'components/Bullet/utils';
import { Bullet } from 'shared/typings/Bullet';

const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.secondary.main,
        padding: '7px 16px 24px 16px',
        lineHeight: '24px',
    },
}));

export interface BulletDescProps {
    bullet: Bullet;
    collapse?: boolean;
}

const BulletDesc = ({
    bullet,
    collapse = true,
}: BulletDescProps): ReactElement => {
    const classes = useStyles();

    return (
        <Collapse in={!collapse}>
            {!collapse && (
                <Box
                    data-cy={`bullet-desc-${bullet.id}`}
                    className={classes.root}
                >
                    <Delimiter title="Request" />
                    {bullet.request.headers && (
                        <TitleAndKeyValuesDesc
                            uuid={`bullet-desc-req-headers-${bullet.id}`}
                            title="Headers"
                            obj={bullet.request.headers}
                        />
                    )}
                    {bullet.request.body && (
                        <TitleAndRawValueDesc
                            uuid={`bullet-desc-req-body-${bullet.id}`}
                            title="Body"
                            obj={bullet.request.body}
                        />
                    )}
                    <Delimiter title="Response" />
                    {bullet.response.headers && (
                        <TitleAndKeyValuesDesc
                            uuid={`bullet-desc-res-headers-${bullet.id}`}
                            title="Headers"
                            obj={bullet.response.headers}
                        />
                    )}
                    {bullet.response.body && (
                        <TitleAndRawValueDesc
                            uuid={`bullet-desc-res-body-${bullet.id}`}
                            title="Body"
                            obj={bullet.response.body}
                        />
                    )}
                </Box>
            )}
        </Collapse>
    );
};

export default BulletDesc;
