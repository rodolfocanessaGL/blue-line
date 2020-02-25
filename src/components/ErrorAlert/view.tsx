import React, { FunctionComponent } from 'react';
import Alert from 'react-bootstrap/Alert';

import { ErrorAlertProps } from './types';

const ErrorAlert: FunctionComponent<ErrorAlertProps> = ({
  show,
  heading,
  message,
  onClose
}) => {
  if (!show) {
    return null;
  }

  return (
    <Alert variant="danger" onClose={onClose} dismissible>
      {heading && <Alert.Heading>{heading}</Alert.Heading>}
      <p>{message}</p>
    </Alert>
  );
};

export default ErrorAlert;
