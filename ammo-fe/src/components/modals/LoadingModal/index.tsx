import React, { ReactElement } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Modal, { ModalProps } from 'components/modals/Modal';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {},
    loader: {
        padding: '17px 17px',
        textAlign: 'center',
    },
}));

export interface LoadingModalProps extends Omit<ModalProps, 'children'> {
    title?: string;
    content?: string;
}

const LoadingModal = ({
    title,
    content,
    open,
    ariaDescribedby,
    ariaLabelledby,
}: LoadingModalProps): ReactElement => {
    const classes = useStyles();
    return (
        <Modal
            open={open}
            ariaDescribedby={ariaDescribedby}
            ariaLabelledby={ariaLabelledby}
        >
            {title && (
                <DialogTitle id="loading-modal-title">
                    <Typography variant="h6">{title}</Typography>
                </DialogTitle>
            )}
            {content && (
                <DialogContent id="loading-modal-content">
                    <DialogContentText>
                        <Typography>{content}</Typography>
                    </DialogContentText>
                </DialogContent>
            )}
            <Box className={classes.loader} id="loading-modal-loader-container">
                <CircularProgress color="secondary" />
            </Box>
        </Modal>
    );
};

export default LoadingModal;
