import React, { ReactElement, ReactNode } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Dialog from '@material-ui/core/Dialog';
import useI18n from 'hooks/useI18n';
import i18n from 'types/i18n';
import Palette from 'material/Palette';

const useStyles = makeStyles(() => ({
    root: {
        bacgroundColor: 'white',
        backgroundColor: Palette.BLACK_MED,
        '& *': {
            color: `${Palette.WHITE} !important`,
        },
    },
}));

export interface ModalProps {
    open?: boolean;
    children: ReactNode;
    ariaLabelledby: i18n;
    ariaDescribedby: i18n;
}

const Modal = ({
    open = false,
    children,
    ariaLabelledby,
    ariaDescribedby,
}: ModalProps): ReactElement => {
    const classes = useStyles();
    const locI18n = useI18n();

    return (
        <Dialog
            PaperProps={{ className: classes.root }}
            open={open}
            aria-labelledby={locI18n(ariaLabelledby)}
            aria-describedby={locI18n(ariaDescribedby)}
        >
            {children}
        </Dialog>
    );
};

export default Modal;
