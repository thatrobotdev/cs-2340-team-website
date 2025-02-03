import Link from "next/link";
import { Button, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const ProjectsCarousel: React.FC = () => {
  return (
    <div className="py-3">
      <Container style={{ maxWidth: "900px" }}>
        <Carousel fade style={{ maxWidth: "900px" }}>
          <Carousel.Item>
            <img
              src="https://picsum.photos/seed/picsum/900/500"
              alt="First slide"
            />
            <Carousel.Caption className="bg-black bg-opacity-75">
              <h3>Movies Store</h3>
              <p>A showcase of full-stack functionalities with Django.</p>
              <div className="btn-group">
                <Button
                  variant="primary"
                  href="https://github.com/thatrobotdev/moviesstore"
                >
                  View Project
                </Button>
                <Link href="/projects/moviesstore">
                  <Button variant="outline-info">Learn More</Button>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://picsum.photos/seed/yay/900/500"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>More projects coming soon...</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default ProjectsCarousel;
