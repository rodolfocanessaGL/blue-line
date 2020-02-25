import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import { ErrorBoundaryProps, ErrorBoundaryState } from './types';

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children }  = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <Redirect to="/error" />;
    }

    return children;
  }
}

export default ErrorBoundary;
