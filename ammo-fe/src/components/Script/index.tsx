import React, { ReactElement, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grow from '@material-ui/core/Grow';
import Palette from 'material/Palette';
import ScriptHeader from 'components/Script/ScriptHeader';
import ScriptDesc from 'components/Script/ScriptDesc';
import Bullet from 'shared/types/Bullet';

const useStyles = makeStyles(() => ({
    root: {
        margin: '2px 2px 0',
        backgroundColor: Palette.BLACK_MED,
    },
}));

export interface ScriptProps {
    bullet: Bullet;
    previousScriptLength: number;
}

const Script = ({
    bullet,
    previousScriptLength,
}: ScriptProps): ReactElement => {
    const classes = useStyles();
    const [collapse, setCollapse] = useState<boolean>(true);

    const toggleCollapse = (): void => setCollapse((prevState) => !prevState);

    return (
        <Grow in>
            <Box data-cy={`script-${bullet.id}`} className={classes.root}>
                <ScriptHeader
                    bullet={bullet}
                    collapse={collapse}
                    onClick={toggleCollapse}
                />

                <ScriptDesc
                    bullet={bullet}
                    previousScriptLength={previousScriptLength}
                    collapse={collapse}
                />
            </Box>
        </Grow>
    );
};

export default Script;
