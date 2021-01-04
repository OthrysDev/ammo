import React, { ReactElement } from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { PrismLight } from 'react-syntax-highlighter';
import scala from 'react-syntax-highlighter/dist/cjs/languages/prism/scala';
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia';
import Grow from '@material-ui/core/Grow';

PrismLight.registerLanguage('scala', scala);

// For syntax highlighting : https://www.npmjs.com/package/react-syntax-highlighter
// along with Prism : https://prismjs.com/

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        borderTop: `1px solid ${theme.palette.primary.dark}`,
        padding: '4px 9px',
        margin: '1px 0',
        backgroundColor: theme.palette.primary.main,
    },
}));

export interface ScriptProps {
    previousScriptLength: number;
}

const Script = ({ previousScriptLength }: ScriptProps): ReactElement => {
    const classes = useStyles();

    const fakeScript = `// Get user
val login =
    exec(
        http("[AUTH] Login")
        .post("/auth/login")
        // Inject previously saved var '__ACCESS_TOKEN__'
        .header("Authorization", "Bearer \${__ACCESS_TOKEN__}")
            .body(StringBody("""{ 
                "email": "\${email}",
                "password": "hello5678"
        }""")).asJson
        .check(bodyString.saveAs("__BODY__"))
        // Save var 'jwtToken' for later use
        .check(header("jwtToken").saveAs("__JWT_TOKEN__"))
    )
    // Debug mode
    .exec(session => {
        Util.debug("[AUTH] Login", session("__JWT_TOKEN__").as[String])
        session
    })
`;

    return (
        <Grow in>
            <Box className={classes.root}>
                <PrismLight
                    language="scala"
                    style={okaidia}
                    customStyle={{ margin: 0, padding: 0, background: 'none' }}
                    lineNumberStyle={{ minWidth: '2em', textAlign: 'right' }}
                    showLineNumbers
                    startingLineNumber={previousScriptLength}
                >
                    {fakeScript}
                </PrismLight>
            </Box>
        </Grow>
    );
};

export default Script;
