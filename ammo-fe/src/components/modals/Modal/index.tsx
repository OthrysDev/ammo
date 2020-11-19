import React, { ReactElement, ReactNode } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
    root: {
        bacgroundColor: 'white',
        backgroundColor: theme.palette.primary.main,
        '& *': {
            color: theme.palette.secondary.main,
        },
    },
}));

export interface ModalProps {
    open?: boolean;
    children: ReactNode;
    ariaLabelledby: string;
    ariaDescribedby: string;
}

const Modal = ({
    open = false,
    children,
    ariaLabelledby,
    ariaDescribedby,
}: ModalProps): ReactElement => {
    const classes = useStyles();
    return (
        <Dialog
            id="modal"
            PaperProps={{ className: classes.root }}
            open={open}
            aria-labelledby={ariaLabelledby}
            aria-describedby={ariaDescribedby}
        >
            {children}
        </Dialog>
    );
};

export default Modal;
