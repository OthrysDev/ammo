import React, { ReactElement, ReactNode } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Bar from 'components/Bar';

const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
        width: '100%',
        overflowY: 'hidden',
    },
    grid: {
        height: '100%',
        width: '100%',
    },
}));

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
    const classes = useStyles();

    return (
        <Box data-cy="layout-root" className={classes.root}>
            <Bar />

            {children}
        </Box>
    );
};

export default Layout;
