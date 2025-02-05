import React from "react";
import { Card } from "react-bootstrap";

interface ProjectsShowcaseCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  projectLink?: string;
  learnMoreLink?: string;
}

const ProjectsShowcaseCard: React.FC<ProjectsShowcaseCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  projectLink,
  learnMoreLink,
}) => {
  return (
    <Card className="mx-auto project-card" style={cardStyle}>
      <Card.Img
        variant="top"
        src={imageSrc}
        alt={imageAlt}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
        className="project-card-img"
      />
      <Card.Body className="text-center">
        {title && <Card.Title className="project-title">{title}</Card.Title>}
        {description && <Card.Text className="project-description">{description}</Card.Text>}
        {projectLink && (
          <Card.Link
            className="link-underline-primary project-link"
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </Card.Link>
        )}
        {learnMoreLink && (
          <Card.Link
            href={learnMoreLink}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Source
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};

const cardStyle: React.CSSProperties = {
  borderRadius: "15px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
};

export default ProjectsShowcaseCard;
