import React, { ReactElement } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

interface ToolTipProps {
    title: string;
    children: ReactElement;
}

const ToolTip = ({ title, children }: ToolTipProps): ReactElement => {
    return (
        <Tooltip title={title} enterDelay={1000} leaveDelay={0}>
            {children}
        </Tooltip>
    );
};

export default ToolTip;
