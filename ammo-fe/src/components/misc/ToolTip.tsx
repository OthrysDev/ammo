import React, { ReactElement, ReactNode } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

interface ToolTipProps {
    title: string;
    children: ReactNode;
}

const ToolTip = ({ title, children }: ToolTipProps): ReactElement => {
    return (
        <Tooltip title={title} enterDelay={1000} leaveDelay={0}>
            {children}
        </Tooltip>
    );
};

export default ToolTip;
