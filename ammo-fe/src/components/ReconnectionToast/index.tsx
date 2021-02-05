import React, { ReactElement } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { FormattedMessage } from 'react-intl';
import Palette from 'material/Palette';
import useMQ from 'hooks/useMQ';
import useI18n from 'hooks/useI18n';

import Box from 'material/Box';

const useStyles = makeStyles(() => ({
    root: {
        border: `1px solid ${Palette.RED_LIGHT}`,
        backgroundColor: Palette.BLACK_DARK,
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
        color: Palette.RED_LIGHT,
    },
}));

const ReconnectionToast = (): ReactElement => {
    const classes = useStyles();
    const { isSMDown } = useMQ();
    const i18n = useI18n();

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
                        <CircularProgress
                            id="circular-load-bar"
                            size={30}
                            title={i18n(
                                'ReconnectionToast.CircularProgress.Title'
                            )}
                        />
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
