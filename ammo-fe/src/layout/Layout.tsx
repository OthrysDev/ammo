import React, { ReactElement, ReactNode } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

interface LayoutProps {
    children?: ReactNode;
}

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100%',
    },
    grid: {
        height: '100%',
        width: '100%',
    },
}));

const Layout = ({ children }: LayoutProps): ReactElement => {
    const classes = useStyles();

    return <Box className={classes.root}>{children}</Box>;
};

export default Layout;
