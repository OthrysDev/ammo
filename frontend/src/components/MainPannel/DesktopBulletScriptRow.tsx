import React, { ReactElement, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Bullet from 'components/Bullet';
import 'simplebar/dist/simplebar.min.css';
import IBullet from 'shared/types/Bullet';
import Script from 'components/Script';

interface DesktopBulletScriptRowProps {
    index: number;
    bullet: IBullet;
}

export default memo(function DesktopBulletScriptRow({
    index,
    bullet,
}: DesktopBulletScriptRowProps): ReactElement {
    return (
        <Grid key={`bullet-script-row-${bullet.id}`} container>
            <Grid item xs={6}>
                <Bullet bullet={bullet} />
            </Grid>
            <Grid item xs={6}>
                <Script index={index + 1} bullet={bullet} />
            </Grid>
        </Grid>
    );
});
