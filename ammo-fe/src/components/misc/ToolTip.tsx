import React, { ReactElement, ReactNode } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

interface ToolTipProps {
    id: string;
    title: string;
    children: ReactElement<any, any>;
}

const ToolTip = ({ id, title, children }: ToolTipProps): ReactElement => {
    return (
        <Tooltip id={id} title={title} enterDelay={1000} leaveDelay={0}>
            {children}
        </Tooltip>
    );
};

export default ToolTip;
