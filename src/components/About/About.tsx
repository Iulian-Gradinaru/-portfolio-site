import { Container, SkillItem, SkillsContainer } from './About.styles';
import React from 'react';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import GitHub from '../../assets/github.png';

export const About: React.FC = () => {
  const skills = [
    { image: HTML, description: 'HTML' },
    { image: CSS, description: 'CSS' },
    { image: JavaScript, description: 'JavaScript' },
    { image: ReactImg, description: 'React' },
    { image: Node, description: 'Node.js' },
    { image: GitHub, description: 'GitHub' },
  ];

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <SkillItem key={index}>
        <img src={skill.image} alt={skill.description + ' icon'} />
        <p>{skill.description}</p>
      </SkillItem>
    ));
  };

  return (
    <Container>
      <h2>About me</h2>
      <p>Short description about you and your skills.</p>
      <div>
        <div>
          <h2>Skills</h2>
          <p>These are the technologies I've worked with</p>
        </div>

        <SkillsContainer>{renderSkills()}</SkillsContainer>
      </div>
    </Container>
  );
};
