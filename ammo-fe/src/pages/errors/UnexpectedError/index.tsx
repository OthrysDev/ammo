import React, { ReactElement } from 'react';
import Error from 'pages/errors/Error';
import Box from '@material-ui/core/Box';

function UnexpectedError(): ReactElement {
    const onReset = (): void => window.location.reload();

    return (
        <Box data-cy="unexpected-error-page">
            <Error
                title="Pages.UnexpectedError.Title"
                content="Pages.UnexpectedError.Content"
                button="Pages.UnexpectedError.Button"
                onReset={onReset}
            />
        </Box>
    );
}

export default UnexpectedError;
