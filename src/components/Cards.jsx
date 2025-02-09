// Updated Cards Component
import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import "@fontsource/oswald";
import {
  Linkedin,
  Github,
  TwitterX,
  Mastodon,
  BoxArrowUpRight,
} from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky } from "@fortawesome/free-brands-svg-icons";

const Cards = ({ members }) => {
  return (
    <Container className="py-5">
      <h2
        className="text-center "
        style={{
          fontWeight: "bold",
          fontSize: "3rem",
          paddingBottom: "10px",
        }}
      >
        WELCOME
      </h2>

      <div
        className="openSanFont"
        style={{
          textAlign: "center",
          margin: "0 auto",
          paddingBottom: "50px",
          width: "75%",
        }}
      >
        Hello! We are a team of developers, designers, and creators taking CS 2340 at Georgia Tech who are passionate about learning software development. We are excited to share our projects with you and hope you enjoy them!
      </div>

      <hr
        style={{
          width: "80%",
          textAlign: "center",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      ></hr>

      <div style={{}}>
        <h2
          className="text-center"
          style={{
            fontWeight: "bold",
            fontSize: "4.5rem",
          }}
        >
          MEET OUR TEAM
        </h2>
        <h1
          style={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#FF5252",
            fontSize: "7rem",
            textAlign: "center",
            marginTop: "-20px",
          }}
        >
          ____________________
        </h1>
      </div>
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
              className="h-100 shadow-lg card-hover"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.border =
                  "5px solid rgba(255, 82, 82, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1.0)";
                e.currentTarget.style.border =
                  "2px solid rgba(155, 155, 155, 0.5)";
              }}
            >
              <Card.Body className="">
                <div className="d-flex mb-3">
                  {member.imageSrc && (
                    <Image
                    src={member.imageSrc}
                    alt={`${member.name} profile`}
                    width={250}
                    height={250}
                    style={{ borderRadius: "15px" }}
                  />
                  )}
                </div>
                <Card.Title style={cardTitleStyle}>{member.name}</Card.Title>
                <Card.Text className="text-muted" style={cardTextStyle}>
                  {member.description}
                </Card.Text>
                <p className="text-role fw-bold">
                  {member.role || "Team Member"}
                </p>
                <div>
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      className="mx-2 text-dark"
                    >
                      <BoxArrowUpRight />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.linkedin}`}
                      target="_blank"
                      className="mx-2 text-dark"
                    >
                      <Linkedin />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      className="mx-2 text-dark"
                    >
                      <Github />
                    </a>
                  )}
                  {member.mastodon && (
                    <a
                      href={`https://mastodon.social/@${member.mastodon}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <Mastodon />
                    </a>
                  )}
                  {member.bluesky && (
                    <a
                      href={`https://bsky.app/profile/${member.bluesky}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <FontAwesomeIcon icon={faBluesky} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={`https://x.com/${member.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 text-dark"
                    >
                      <TwitterX />
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

const cardStyle = {
  borderRadius: "15px",
  background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
  transition: "all 0.3s ease-in-out",
  border: "2px solid rgba(155, 155, 155, 0.5)",
};

const cardTitleStyle = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#FF5252",
};

const cardTextStyle = {
  fontSize: "0.9rem",
  lineHeight: "1.5",
};

export default Cards;
