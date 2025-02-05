// Updated Cards Component
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

const Cards = ({ members }) => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-5" style={headingStyle}>
        MEET OUR TEAM!
      </h2>
      <Row className="g-4 justify-content-center">
        {members.map((member, index) => (
          <Col
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className="d-flex justify-content-center"
          >
            <Card
              className="h-100 shadow-lg border-0 card-hover"
              style={cardStyle}
            >
              <Card.Body className="">
                <div className="d-flex mb-3">
                  <Image
                    src={member.imageSrc}
                    alt={`${member.name} profile`}
                    width={250}
                    height={250}
                    //border-radius={15}
                    //className="rounded-circle"
                    style={{borderRadius:"15px"}}
                  />
                </div>
                <Card.Title style={cardTitleStyle}>{member.name}</Card.Title>
                <Card.Text className="text-muted" style={cardTextStyle}>
                  {member.description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                </Card.Text>
                <p className="text-primary fw-bold">
                  {member.role || "Team Member"}
                </p>
                <div>
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={`https://twitter.com/${member.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <i className="bi bi-twitter"></i>
                    </a>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

// Inline Styles
const headingStyle = {
  color: "#6A8EAE",
  fontWeight: "bold",
  fontSize: "2rem",
};

const cardStyle = {
  borderRadius: "15px",
  background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
  transition: "all 0.3s ease-in-out",
};

const cardTitleStyle = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#6A8EAE",
};

const cardTextStyle = {
  fontSize: "0.9rem",
  lineHeight: "1.5",
};

export default Cards;