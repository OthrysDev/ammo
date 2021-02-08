import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from 'material/Typography';
import Box from 'material/Box';
import { FormattedMessage } from 'react-intl';
import i18n from 'types/i18n';
import Palette from 'material/Palette';

const useDelimiterStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '12px',
        color: Palette.GREY_DARK,
    },
    border: {
        borderTop: `1px solid ${Palette.GREY_DARK}`,
        width: '100%',
        marginTop: '10px',
    },
    title: {
        margin: '0 7px',
    },
}));

interface DelimiterProps {
    title: i18n;
}

const Delimiter = ({ title }: DelimiterProps): ReactElement => {
    const classes = useDelimiterStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.border} />
            <Box className={classes.title}>
                <Typography variant="subtitle2">
                    <FormattedMessage id={title} />
                </Typography>
            </Box>
            <Box className={classes.border} />
        </Box>
    );
};

export default Delimiter;
