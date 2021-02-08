import React, { ReactElement, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
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
    index: number;
    bullet: Bullet;
}

const Script = ({ index, bullet }: ScriptProps): ReactElement => {
    const classes = useStyles();
    const [collapse, setCollapse] = useState<boolean>(true);

    const toggleCollapse = (): void => setCollapse((prevState) => !prevState);

    return (
        <Box className={classes.root}>
            <ScriptHeader
                index={index}
                bullet={bullet}
                collapse={collapse}
                onClick={toggleCollapse}
            />

            <ScriptDesc index={index} bullet={bullet} collapse={collapse} />
        </Box>
    );
};

export default Script;
