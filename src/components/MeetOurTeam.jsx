import { Card, Row, Col, Container } from "react-bootstrap";
import Image from "next/image";
import {
  Linkedin,
  Github,
  TwitterX,
  Mastodon,
  BoxArrowUpRight,
} from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBluesky } from "@fortawesome/free-brands-svg-icons";

const MeetOurTeam = ({ members }) => {
  return (
    <Container className="py-5">
      <div>
        <h2 className="text-center fw-bold fs-1">
          MEET OUR TEAM
        </h2>
        <hr className="text-primary my-4 opacity-100" style={{ borderWidth: '5px' }} />
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
              <Card.Body>
                <div className="d-flex mb-3">
                  {member.imageSrc && (
                    <Image
                    src={member.imageSrc}
                    alt={`${member.name} profile`}
                    width={250}
                    height={250}
                    className="img-fluid"
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

export default MeetOurTeam;
