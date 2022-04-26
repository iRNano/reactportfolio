import React from "react";
import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import Heading from "../shared/Heading";
import hnThumbnail from "../assets/images/happnails500.png";
import amThumbnail from "../assets/images/assetmania500.png";
import ngThumbnail from "../assets/images/nagrand500.png";
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

const nagrand = {
  title: "Nagrand Resort & Spa",
  desc: "Hotel Booking System",
  skills: ["REACT", "EXPRESS", "NODE", "MONGODB"],
  link: "https://nagrandhotel.vercel.app/",
  repo: "https://github.com/iRNano/nagrandhotel",
  thumbnail: ngThumbnail,
};

const projects = [happynails, assetmania, nagrand];

const StyledLayout = styled(Layout)`
  background: ${(props) => props.theme.darkblue};
`;

const Projects = () => {
  const { Content } = Layout;

  const showProjects = projects.map((project) => (
    <Col xs={24} lg={8}>
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
            style={{ padding: "1em 0em", "text-align": "center" }}
          >
            Projects
          </Heading.H0>

          <Row gutter={40} style={{ "margin-bottom": "4em" }}>
            {showProjects}
          </Row>
        </Content>
      </StyledLayout>
    </Wrapper>
  );
};

export default Projects;
