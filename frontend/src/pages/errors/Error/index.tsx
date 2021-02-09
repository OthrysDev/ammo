import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from 'material/Box';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { FormattedMessage } from 'react-intl';
import i18n from 'types/i18n';
import Palette from 'material/Palette';
import Typography from 'material/Typography';

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100vw',
        backgroundColor: Palette.BLACK_DARK,
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
        color: Palette.WHITE,
        marginBottom: '12px',
    },
    content: {
        color: Palette.GREY_LIGHT,
        marginBottom: '18px',
    },
    button: {
        color: Palette.GREY_LIGHT,
        border: `1px solid ${Palette.GREY_LIGHT}`,
    },
    icon: {
        marginRight: '7px',
    },
}));

export interface ErrorProps {
    title: i18n;
    content: i18n;
    button: i18n;
    onReset: () => void;
}

function Error({ title, content, button, onReset }: ErrorProps): ReactElement {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
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

                <Button
                    data-cy="error-button"
                    className={classes.button}
                    onClick={onReset}
                >
                    <HomeIcon className={classes.icon} />
                    <Typography variant="button">
                        <FormattedMessage id={button} />
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
}

export default Error;
