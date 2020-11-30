import React, { ReactElement } from 'react';
import Error from 'pages/errors/Error';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';

const NotFound = (): ReactElement => {
    const history = useHistory();

    const onReset = (): void => history.push('/');

    return (
        <Box data-cy="not-found-page">
            <Error
                title="Pages.NotFound.Title"
                content="Pages.NotFound.Content"
                button="Pages.NotFound.Button"
                onReset={onReset}
            />
        </Box>
    );
};

export default NotFound;
