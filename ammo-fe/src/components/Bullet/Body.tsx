import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from 'material/Typography';
import Box from 'material/Box';
import { FormattedMessage } from 'react-intl';
import Palette from 'material/Palette';
import { isJSON, prettifyJSON } from 'util/StringUtil';

const useStyles = makeStyles(() => ({
    title: {
        color: Palette.GREY_DARK,
        margin: '8px 0',
    },
    value: {
        marginLeft: '24px',
        wordBreak: 'break-word',
        color: Palette.WHITE,
    },
    pre: {
        fontSize: '0.875rem',
        fontFamily: 'Arial',
        whiteSpace: 'pre-wrap',
    },
}));

interface BodyProps {
    body?: unknown;
}

const Body = ({ body }: BodyProps): ReactElement => {
    const classes = useStyles();

    // Try to display the body nicely. Only prettifying JSON  for now
    const prettify = (obj: unknown): ReactElement => {
        return obj && isJSON(obj) ? (
            <pre className={classes.pre}>{prettifyJSON(obj as string)}</pre>
        ) : (
            <>{obj}</>
        );
    };

    return (
        <Box>
            <Box className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id="Body" />
                </Typography>
            </Box>
            {body && (
                <Box className={classes.value}>
                    <Typography variant="subtitle2">
                        {prettify(body)}
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Body;
