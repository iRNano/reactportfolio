import React from "react";
import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import Heading from "../shared/Heading";
import hnThumbnail from "../assets/images/happnails500.png";
import amThumbnail from "../assets/images/assetmania500.png";
import ngThumbnail from "../assets/images/nagrand500.png";
import polaThumbnail from '../assets/images/pola_logo.png'
import polaVerseThumbnail from '../assets/images/polaverse.png'
import Card from "../shared/Card";
import Wrapper from "../layouts/Wrapper";

const assetmania = {
  title: "Asset Mania",
  desc: "IT Asset Management System",
  skills: ["PHP", "LARAVEL", "MYSQL"],
  link: "https://assetmania.herokuapp.com/",
  repo: "https://github.com/iRNano/assetmgmt",
  thumbnail: amThumbnail,
};

const happynails = {
  title: "Happy Nails",
  desc: "Static Website",
  skills: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
  link: "https://irnano.github.io/capstone1/",
  repo: "https://github.com/iRNano/capstone1",
  thumbnail: hnThumbnail,
};

const artbypola = {
  title: "Art By Pola",
  desc: "React App",
  skills: ["HTML", "CSS", "SEMANTIC-UI", "REACTJS"],
  link: "https://artbypola.vercel.app/",
  repo: "https://github.com/iRNano/artbypola",
  thumbnail: polaThumbnail,
};

const nagrand = {
  title: "Nagrand Resort & Spa",
  desc: "Hotel Booking System",
  skills: ["REACTJS", "EXPRESS", "NODE", "MONGODB"],
  link: "https://nagrandhotel.vercel.app/",
  repo: "https://github.com/iRNano/nagrandhotel",
  thumbnail: ngThumbnail,
};
const polaverse = {
  title: "Polaverse",
  desc: "Anime Directory",
  skills: ["REACTJS"],
  link: "https://polaverse.vercel.app/",
  repo: "https://github.com/iRNano/polaverse",
  thumbnail: polaVerseThumbnail,
};

const projects = [happynails, nagrand, artbypola, polaverse];

const Projects = () => {
  const { Content } = Layout;

  const showProjects = projects.map((project) => (
    <Col xs={24} lg={8} key={project.title}>
      <Card
        cover={project.thumbnail}
        title={project.title}
        desc={project.desc}
        skills={project.skills}
        website={project.link}
        repo={project.repo}
      />
    </Col>
  ));
  return (
    <Wrapper location="projects">
      <StyledLayout>
        <Content>
          <Heading.H0
            location="title"
            style={{ padding: "1em 0em", "textAlign": "center" }}
          >
            Projects
          </Heading.H0>

          <Row gutter={40} style={{ "marginBottom": "4em" }}>
            {showProjects}
          </Row>
        </Content>
      </StyledLayout>
    </Wrapper>
  );
};

export default Projects;

const StyledLayout = styled(Layout)`
  background: ${(props) => props.theme.darkblue};
`;