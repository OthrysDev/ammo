import React, { ReactElement } from 'react';
import Error from 'pages/Error';

function UnexpectedError(): ReactElement {
    return (
        <Error
            title="Pages.UnexpectedError.Title"
            content="Pages.UnexpectedError.Content"
            button="Pages.UnexpectedError.Button"
        />
    );
}

export default UnexpectedError;
