import React, { ReactElement } from 'react';
import Error from 'pages/errors/Error';

const NotFound = (): ReactElement => (
    <Error
        title="Pages.NotFound.Title"
        content="Pages.NotFound.Content"
        button="Pages.NotFound.Button"
    />
);

export default NotFound;
