import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from 'material/Typography';
import Palette from 'material/Palette';
import Box from 'material/Box';

const useStyles = makeStyles(() => ({
    values: {
        marginLeft: '24px',
        wordBreak: 'break-word',
    },
    headerValue: {
        color: Palette.WHITE,
    },
}));

interface HeadersProps {
    headerKey: string;
    headerValue: string | string[];
}

const Header = ({ headerKey, headerValue }: HeadersProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box className={classes.values}>
            <Typography variant="subtitle2">
                <span>{headerKey}</span> :{' '}
                <span className={classes.headerValue}>"{headerValue}"</span>
            </Typography>
        </Box>
    );
};

export default Header;
