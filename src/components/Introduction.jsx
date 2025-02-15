import { Container, Row, Col } from "react-bootstrap";

function Introduction() {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold fs-1">WELCOME</h2>

      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center pb-5">
          Hello, team 4 reporting! This is our team website, which showcases our
          final movie store project along with our workflow and collaboration. We
          hope you take the time to enjoy our website! Thank you!
        </Col>
      </Row>

      <hr />
    </Container>
  );
};

export default Introduction;
