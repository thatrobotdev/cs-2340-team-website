import { Card } from "react-bootstrap";

interface ProjectsShowcaseCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  projectLink?: string;
  processLink?: string;
}

const ProjectsShowcaseCard: React.FC<ProjectsShowcaseCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  projectLink,
  processLink,
}) => {
  return (
    <Card className="mx-auto project-card " style={cardStyle}>
      <Card.Img
        variant="top"
        src={imageSrc}
        alt={imageAlt}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        className="project-card-img"
      />
      <Card.Body className="text-center">
        {title && <u style={{fontSize:"30px"}} className="colored-underline fw-bold"><Card.Title className="black-text fw-bold fs-3">{title}</Card.Title></u>}
        {description && <Card.Text className="project-description">{description}</Card.Text>}
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
      </Card.Body>
    </Card>
  );
};

const cardStyle: React.CSSProperties = {
  borderRadius: "15px",
  border: " 20px", 
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  paddingBottom: "20px"
};

export default ProjectsShowcaseCard;
