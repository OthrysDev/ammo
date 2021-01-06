import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import { Bullet } from 'shared/types/Bullet';
import Headers from 'components/Bullet/Headers';
import Body from 'components/Bullet/Body';
import Delimiter from 'components/Bullet/Delimiter';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        color: Palette.GREY_LIGHT,
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
                    <Headers
                        uuid={`bullet-desc-req-headers-${bullet.id}`}
                        headers={bullet.request.headers}
                    />
                    {bullet.request.body && (
                        <Body
                            uuid={`bullet-desc-req-body-${bullet.id}`}
                            body={bullet.request.body}
                        />
                    )}
                    <Delimiter title="Response" />
                    <Headers
                        uuid={`bullet-desc-res-headers-${bullet.id}`}
                        headers={bullet.response.headers}
                    />
                    {bullet.response.body && (
                        <Body
                            uuid={`bullet-desc-res-body-${bullet.id}`}
                            body={bullet.response.body}
                        />
                    )}
                </Box>
            )}
        </Collapse>
    );
};

export default BulletDesc;
