import React, {Component} from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
            errorMessage: error,
            errorInfo:errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>{this.state.errorMessage.toString()}</h2>
                    <p>{this.state.errorInfo.componentStack}</p>
                </div>
            );
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;
