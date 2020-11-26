import * as React from 'react';

type IState = {
    hasError: boolean;
};

type IProps = {
    children: React.ReactNode;
};

//! Error boundaries do not catch errors inside event handlers.

export default class ErrorBoundary extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error: unknown, errorInfo: unknown) {
        // You can also log the error to an error reporting service
    }

    refreshApp = () => window.location.reload();

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1>Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
