import NotFound from 'pages/errors/NotFound';
import * as React from 'react';
// import { useHistory } from 'react-router-dom';

const RouterFallback = (): JSX.Element => {
    // const history = useHistory();

    // const returnToHome = (): void => history.push('/');

    return <NotFound />;
};

export default RouterFallback;
