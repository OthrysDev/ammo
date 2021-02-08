import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from 'material/Typography';
import Box from 'material/Box';
import { FormattedMessage } from 'react-intl';
import Palette from 'material/Palette';
import { isString, isJSON, prettifyJSON } from 'util/StringUtil';

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
    const prettify = (obj: unknown): ReactElement | null => {
        if (!obj) return null;

        // Whatever the type of the body, cast it to String
        let castObj = obj;
        if (!isString(castObj)) castObj = JSON.stringify(castObj);

        return isJSON(castObj) ? (
            <pre className={classes.pre}>{prettifyJSON(castObj as string)}</pre>
        ) : (
            <>{castObj}</>
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
