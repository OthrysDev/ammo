import React, { ReactElement } from 'react';
import Box from 'material/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { PrismLight } from 'react-syntax-highlighter';
import scala from 'react-syntax-highlighter/dist/cjs/languages/prism/scala';
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia';
import Collapse from '@material-ui/core/Collapse';
import Palette from 'material/Palette';
import Bullet from 'shared/types/Bullet';
import GatlingScripter from 'scripters/GatlingScripter';
import SimpleBar from 'simplebar-react';

PrismLight.registerLanguage('scala', scala);

// For syntax highlighting : https://www.npmjs.com/package/react-syntax-highlighter
// along with Prism : https://prismjs.com/

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        borderTop: `1px solid ${Palette.BLACK_DARK}`,
        padding: '4px 9px',
        margin: '1px 0',
        backgroundColor: Palette.BLACK_MED,
    },
}));

export interface ScriptDescProps {
    index: number;
    bullet: Bullet;
    collapse?: boolean;
}

const ScriptDesc = ({
    index,
    bullet,
    collapse = false,
}: ScriptDescProps): ReactElement => {
    const classes = useStyles();

    const script = GatlingScripter.script(index, bullet);

    return (
        <Collapse in={!collapse}>
            {!collapse && (
                <Box className={classes.root}>
                    <SimpleBar>
                        <PrismLight
                            language="scala"
                            style={okaidia}
                            customStyle={{
                                margin: 0,
                                padding: 0,
                                background: 'none',
                                overflow: 'hidden !important',
                            }}
                            lineNumberStyle={{
                                minWidth: '2em',
                                textAlign: 'right',
                            }}
                            showLineNumbers
                            tabIndex={0}
                        >
                            {script}
                        </PrismLight>
                    </SimpleBar>
                </Box>
            )}
        </Collapse>
    );
};

export default ScriptDesc;
