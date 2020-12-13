import React, { ReactElement } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FormattedMessage } from 'react-intl';
import useMQ from 'hooks/useMQ';

import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        border: `1px solid ${theme.palette.secondary.main}`,
        backgroundColor: theme.palette.primary.dark,
        justifyContent: 'center',
    },
    marginBottom: {
        bottom: '82px',
    },
    circular: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: '12px',
    },
    message: {
        display: 'inline-block',
        verticalAlign: 'top',
        lineHeight: '35px',
        color: theme.palette.secondary.main,
    },
}));

const ReconnectionToast = (): ReactElement => {
    const classes = useStyles();
    const { isSMDown } = useMQ();

    return (
        <Snackbar
            data-cy="ws-reconnection-toast"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open
            className={isSMDown ? classes.marginBottom : ''}
            ContentProps={{
                className: classes.root,
            }}
            message={
                <Box>
                    <Box className={classes.circular}>
                        <CircularProgress size={30} />
                    </Box>
                    <Box className={classes.message}>
                        <FormattedMessage id="ReconnectionToast" />
                    </Box>
                </Box>
            }
        />
    );
};

export default ReconnectionToast;
