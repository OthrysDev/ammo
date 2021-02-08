import React, { ReactElement } from 'react';
import Tooltip from '@material-ui/core/Tooltip';

interface ToolTipProps {
    uuid: string;
    title: string;
    children: ReactElement;
}

const ToolTip = ({ uuid, title, children }: ToolTipProps): ReactElement => {
    return (
        <Tooltip id={uuid} title={title} enterDelay={1000} leaveDelay={0}>
            {children}
        </Tooltip>
    );
};

export default ToolTip;
