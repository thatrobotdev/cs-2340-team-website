import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ProjectsCarousel from "./ProjectsCarousel";
import { BoxArrowUpRight, Linkedin, Github, Mastodon, TwitterX } from "react-bootstrap-icons";
import { faBluesky } from "@fortawesome/free-brands-svg-icons";
import Stack from "react-bootstrap/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage: React.FC = () => {
  return (
    <>
      <ProjectsCarousel />
      <Col lg={8} className="px-0">
        <h2 className="mt-4">Our Team</h2>
        <Container>
          <Row>
            <Col>
              <Image src="https://placehold.co/100" rounded />
              <p>Aryamann Sheoran</p>
            </Col>
            <Col>
              <Image src="https://placehold.co/100" rounded />
              <p>James Kerrane</p>
              <Stack direction="horizontal" gap={1}>
                <div><a href="https://www.linkedin.com/in/jameskerrane"><Linkedin /></a></div>
                <div><a href="https://www.github.com/thatrobotdev" style={{ textDecoration: 'none', color: 'inherit' }}><Github /></a></div>
                <div><a href="https://bsky.app/profile/jameskerrane.com"><FontAwesomeIcon icon={faBluesky} /></a></div>
                <div><a href="https://mastodon.social/@thatrobotdev" style={{ textDecoration: 'none', color: 'inherit' }}><TwitterX /></a></div>
                <div><a href="https://x.com/jameskerrane" style={{ textDecoration: 'none', color: 'inherit' }}><Mastodon /></a></div>
                <div><a href="https://www.jameskerrane.com/" style={{ textDecoration: 'none', color: 'inherit' }}><BoxArrowUpRight /></a></div>
              </Stack>
            </Col>
            <Col>
              <Image src="https://placehold.co/100" rounded />
              <p>Michael Wittland Jr.</p>
            </Col>
            <Col>
              <Image src="https://placehold.co/100" rounded />
              <p>Palash Patel</p>
            </Col>
            <Col>
              <Image src="https://placehold.co/100" rounded />
              <p>Shane Hanley</p>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
};

export default HomePage;
