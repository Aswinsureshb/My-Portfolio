// ProjectCard.js
import React from 'react';
import { Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Importing icons

export const ProjectCard = ({ title, description, imgUrl, githubLink, externalLink }) => {
  return (
    <Col sm={12} md={6} lg={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} className="project-image"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={30} style={{ color: 'black' }} />
              </a>
            )}
            {externalLink && (
              <a href={externalLink} target="_blank" rel="noopener noreferrer" aria-label="External Link">
                <FaExternalLinkAlt size={30} style={{ color: 'blue' }} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
