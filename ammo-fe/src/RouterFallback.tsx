import * as React from 'react';
// import { useHistory } from 'react-router-dom';

const RouterFallback = (): JSX.Element => {
    // const history = useHistory();

    // const returnToHome = (): void => history.push('/');

    return <div>404 Route didn't match</div>;
};

export default RouterFallback;
