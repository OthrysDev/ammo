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

    static getDerivedStateFromError(): { hasError: boolean } {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    // eslint-disable-next-line class-methods-use-this
    componentDidCatch(error: unknown, errorInfo: unknown): void {
        // You can also log the error to an error reporting service
        console.error(error);
        console.error(errorInfo);
    }

    refreshApp = (): void => window.location.reload();

    render(): React.ReactNode {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <h1 data-cy="error-boundary-root">Something went wrong.</h1>;
        }

        return this.props.children;
    }
}
