import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { FormattedMessage } from 'react-intl';
import i18n from 'types/i18n';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: theme.palette.primary.dark,
        position: 'absolute',
    },
    centered: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
    },
    title: {
        color: theme.palette.secondary.main,
        marginBottom: '12px',
    },
    content: {
        color: theme.palette.secondary.dark,
        marginBottom: '18px',
    },
    button: {
        color: theme.palette.secondary.dark,
        border: `1px solid ${theme.palette.secondary.dark}`,
    },
    icon: {
        marginRight: '7px',
    },
}));

export interface ErrorProps {
    title: i18n;
    content: i18n;
    button: i18n;
}

function Error({ title, content, button }: ErrorProps): ReactElement {
    const classes = useStyles();

    return (
        <Box data-cy="not-found" className={classes.root}>
            <Box className={classes.centered}>
                <Box className={classes.title}>
                    <Typography variant="h4">
                        <FormattedMessage id={title} />
                    </Typography>
                </Box>
                <Box className={classes.content}>
                    <Typography>
                        <FormattedMessage id={content} />
                    </Typography>
                </Box>

                <Button className={classes.button}>
                    <HomeIcon className={classes.icon} />
                    <Typography variant="subtitle2">
                        <FormattedMessage id={button} />
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default Error;
