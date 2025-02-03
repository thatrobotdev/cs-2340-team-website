import { Col, Container, Row } from "react-bootstrap";
import ProjectsShowcaseCard from "./ProjectsShowcaseCard";

const ProjectsShowcase: React.FC = () => {
  return (
    <Container className="py-4">
      <Row className="justify-content-center" gap={4}>
        <Col xs={12} md={8} lg={6}>
          <ProjectsShowcaseCard
            imageSrc={"https://picsum.photos/seed/picsum/900/500"}
            imageAlt={"Placeholder image"}
            title={"Movies Store"}
            description={"A showcase of full-stack functionalities with Django."}
            projectLink={"https://github.com/thatrobotdev/moviesstore"}
            learnMoreLink={
              "https://thatrobotdev.github.io/cs-2340-team-website/projects/moviesstore"
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsShowcase;
