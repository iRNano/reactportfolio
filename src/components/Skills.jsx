import styled from "styled-components";
import Heading from "../shared/Heading";
import html from "../assets/images/html5.png";
import css from "../assets/images/css3.png";
import js from "../assets/images/javascript.png";
import react from "../assets/images/react.png";
import bootstrap from "../assets/images/bootstrap.png";
import node from "../assets/images/nodejs.png";
import express from "../assets/images/express.png";
import antd from "../assets/images/antdesign.png";
import styledicon from "../assets/images/styled.png";
import git from "../assets/images/git.png";
import Wrapper from "../layouts/Wrapper";
import StyledAntDLayout from "../shared/StyledAntDLayout";

const skillsArray = [
  { name: "HTML", img: html },
  { name: "CSS", img: css },
  { name: "JAVASCRIPT", img: js },
  { name: "BOOTSTRAP", img: bootstrap },
  // { name: "jQuery", img: jquery },
  { name: "React", img: react },
  { name: "Ant Design", img: antd },
  { name: "Styled Components", img: styledicon },
  // { name: "Node", img: node },
  // { name: "Express", img: express },
  // { name: "MongoDB", img: mongodb },
  // { name: "PHP", img: php },
  // { name: "Laravel", img: laravel },
  // { name: "MySQL", img: mysql },
  { name: "GIT", img: git },
];

const Skills = () => {
  const showSkills = skillsArray.map((skill) => (
    <StyledAntDLayout.StyledCol location="skills" key={skill.name}>
      <StyledSkill>
        <img className="skill" src={skill.img}></img>
        <Heading.H4 location="skills">{skill.name}</Heading.H4>
      </StyledSkill>
    </StyledAntDLayout.StyledCol>
  ));
  return (
    <Wrapper>
      <Heading.H0
        className="line"
        location="title"
        style={{ padding: "1em 0em", "textAlign": "center" }}
        size="large"
      >
        Skills
      </Heading.H0>
      <StyledAntDLayout.StyledRow
        justify="center"
        gutter={[0, 32]}
        style={{ "marginBottom": "4em" }}
      >
        {showSkills}
      </StyledAntDLayout.StyledRow>
    </Wrapper>
  );
};

export default Skills;

const StyledSkill = styled.div`
  text-align: center;
  .skill {
    @media all and (min-width: 1200px) {
      max-width: 80px;
    }

    @media all and (max-width: 1199px) {
      max-width: 60px;
    }

    @media all and (max-width: 700px) {
      max-width: 50px;
    }
  }
`;
