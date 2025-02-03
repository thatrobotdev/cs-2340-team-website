import { Col, Container, Row } from "react-bootstrap";
import TeamInfoBox from "./TeamInfoBox";
import aryamannSheoranAvatar from "/public/avatars/aryamannsheoran.png";
import jamesKerraneAvatar from "/public/avatars/jameskerrane.jpg";
import palashPatelAvatar from "/public/avatars/palashpatel.jpg";

const TeamInfo: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={9}>
          <h2 className="mt-4">Our Team</h2>
          <Row>
            <Col>
              <TeamInfoBox
                imageSrc={aryamannSheoranAvatar}
                name="Aryamann Sheoran"
              />
            </Col>
            <Col>
              <TeamInfoBox
                imageSrc={jamesKerraneAvatar}
                name="James Kerrane"
                websiteUrl="https://www.jameskerrane.com"
                linkedInProfileId="jameskerrane"
                githubUsername="thatrobotdev"
                mastodonUsername="thatrobotdev"
                blueskyUsername="jameskerrane.com"
                twitterXUsername="jameskerrane"
              />
            </Col>
            <Col>
              <TeamInfoBox
                name="Michael Wittland Jr."
                imageSrc="https://placehold.co/100"
                linkedInProfileId="michael-wittland-323081295/"
              />
            </Col>
            <Col>
              <TeamInfoBox
                name="Palash Patel"
                imageSrc={ palashPatelAvatar}
                linkedInProfileId="palash-patel-1b001a210"
              />
            </Col>
            <Col>
              <TeamInfoBox
                name="Shane Hanley"
                imageSrc="https://placehold.co/100"
              />
            </Col>
          </Row>
        </Col>
        <div className="vr d-none d-md-block p-0 mx-2"/>
        <hr className="d-block d-md-none" />
        <Col sm={1}>
          <h2 className="mt-4">Mentor</h2>
          <Row>
            <Col>
              <TeamInfoBox
                name="Emmanuel Munoz"
                imageSrc="https://placehold.co/100"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamInfo;
