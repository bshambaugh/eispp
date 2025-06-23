import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError : false, error: null };
    }

    static getDerivedStateFromError(error) {
        // Update state to render fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console or a service
        console.error('Error caught by ErrorBoundary:',error,errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI
            return (
              <div style={{ padding: '20px', textAlign: 'center'}}>
                <h1>Something went wrong.</h1>
                <p>{this.state.error?.message || 'An unexpected error occured.'}</p>
                <button onClick={() => window.location.reload()}>
                    Reload Page
                </button>
              </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;