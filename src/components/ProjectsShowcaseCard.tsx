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
    <Card className="mx-auto" style={{ maxWidth: "500px" }}>
      <Card.Img
        variant="top"
        src={imageSrc}
        alt={imageAlt}
        style={{ objectFit: "cover", width: "100%", height: "auto" }}
      />
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {projectLink && (
          <Card.Link className="link-underline-primary" href={projectLink}>
            View Project
          </Card.Link>
        )}
        {learnMoreLink && (
          <Card.Link href={learnMoreLink}>View Source</Card.Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectsShowcaseCard;
