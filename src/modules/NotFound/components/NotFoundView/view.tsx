import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import { ErrorTemplate } from './styles';

const NotFoundView = () => (
  <Container>
    <Row>
      <Col>
        <ErrorTemplate>
          <h1>Oops!</h1>
          <h2>404 Not Found</h2>
          <p>Sorry, an error has occured, Requested page not found!</p>
          <div className="py-3">
            <Link className="btn btn-primary btn-lg" to="/">Take Me Home</Link>
          </div>
        </ErrorTemplate>
      </Col>
    </Row>
  </Container>
);

export default NotFoundView;
