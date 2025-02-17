import { Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

interface Slide {
  src?: string;
  alt?: string;
  caption?: string;
}

interface ProjectsShowcaseCardProps {
  slides?: Slide[];
  title?: string;
  description?: string;
  projectLink?: string;
  processLink?: string;
  videoLink?: string;
}

const ProjectsShowcaseCard: React.FC<ProjectsShowcaseCardProps> = ({
  title,
  slides,
  description,
  projectLink,
  processLink,
  videoLink,
}) => {
  return (
    <Card className="mx-auto project-card" style={cardStyle}>
      <Carousel variant='dark'>
        {slides &&
          slides.map((slide, index) => (
            <Carousel.Item key={ index }>
              <Card.Img
                variant="top"
                src={slide.src}
                alt={slide.alt}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
                className="project-card-img"
              />
              <Carousel.Caption>
                <p className="bg-white bg-opacity-50 fw-light">
                 {slide.caption}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>

      <Card.Body className="text-center">
        {title && (
          <u style={{ fontSize: "30px" }} className=" fw-bold">
            <Card.Title className="black-text fw-bold fs-3">{title}</Card.Title>
          </u>
        )}
        {description && (
          <Card.Text className="project-description">{description}</Card.Text>
        )}
        {projectLink && (
          <Card.Link
            className=" text-link-style"
            href={processLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Card.Link>
        )}
        {processLink && (
          <Card.Link
            href={projectLink}
            className="text-link-style"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub
          </Card.Link>
        )}

        {videoLink && (
          <Card.Link
            href={videoLink}
            className="text-link-style"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Video
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};

const cardStyle: React.CSSProperties = {
  borderRadius: "15px",
  border: " 20px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  paddingBottom: "20px",
};

export default ProjectsShowcaseCard;
