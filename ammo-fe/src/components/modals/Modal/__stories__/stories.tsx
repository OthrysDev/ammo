// import React from 'react';
// import { Story } from '@storybook/react/types-6-0';
// import Modal, { ModalProps } from 'components/modals/Modal';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Button from '@material-ui/core/Button';
// import Box from '@material-ui/core/Box';

// export default {
//     component: Modal,
//     title: 'Modals/Modal',
// };

// const ModalTemplate: Story<ModalProps> = ({
//     open,
//     children,
//     ariaLabelledby,
//     ariaDescribedby,
// }) => {
//     return (
//         <Modal
//             open={open}
//             children={children}
//             ariaLabelledby={ariaLabelledby}
//             ariaDescribedby={ariaDescribedby}
//         />
//     );
// };

// export const Default = ModalTemplate.bind({});
// Default.args = {
//     open: true,
//     children: (
//         <Box>
//             <DialogTitle>This an abstraction for all modals</DialogTitle>
//             <DialogContent>
//                 <DialogContentText>
//                     You should not use this component but instead,
//                     sub-modal-components with specific purposes.
//                 </DialogContentText>
//             </DialogContent>
//             <DialogActions>
//                 <Button>Ok</Button>
//             </DialogActions>
//         </Box>
//     ),
//     ariaLabelledby: 'aria-labelled-by',
//     ariaDescribedby: 'aria-described-by',
// };
