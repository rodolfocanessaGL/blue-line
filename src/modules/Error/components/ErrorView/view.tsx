import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { ErrorTemplate } from './styles';

const ErrorView: FunctionComponent<RouteComponentProps> = () => (
  <Container>
    <Row>
      <Col>
        <ErrorTemplate>
          <h1>Oops!</h1>
          <h2>App Crashed</h2>
          <p>Sorry, an error has occured!</p>
          <div className="py-3">
            <Link className="btn btn-primary btn-lg" to="/">Take Me Home</Link>
          </div>
        </ErrorTemplate>
      </Col>
    </Row>
  </Container>
);

export default ErrorView;
