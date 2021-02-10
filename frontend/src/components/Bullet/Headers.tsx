import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from 'material/Typography';
import Box from 'material/Box';
import { FormattedMessage } from 'react-intl';
import Palette from 'material/Palette';
import Header from 'components/Bullet/Header';

const useStyles = makeStyles(() => ({
    title: {
        color: Palette.GREY_DARK,
        margin: '8px 0',
    },
    values: {
        marginLeft: '24px',
        wordBreak: 'break-word',
    },
    headerValue: {
        color: Palette.WHITE,
    },
}));

interface HeadersProps {
    headers: Record<string, string | string[]>;
}

const Headers = ({ headers }: HeadersProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box>
            <Box className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id="Headers" />
                </Typography>
            </Box>
            {Object.keys(headers).map((key) => (
                <Header
                    key={`header-${key}`}
                    headerKey={key}
                    headerValue={headers[key]}
                />
            ))}
        </Box>
    );
};

export default Headers;
