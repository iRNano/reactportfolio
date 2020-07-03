import React from "react";
import { Layout, Row, Col } from "antd";
import styled from "styled-components";
import Heading from "../shared/Heading";
import happnails from "../assets/images/happnails500.png";
import assetmania from "../assets/images/assetmania500.png";
import nagrand from "../assets/images/nagrand500.png";
import Card from "../shared/Card";
import Wrapper from "../layouts/Wrapper";

let skills, links, repo;

skills = {
  happynails: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP"],
  assetmania: ["PHP", "LARAVEL", "MYSQL"],
  nagrand: ["REACT", "EXPRESS", "NODE", "MONGODB"],
};

links = {
  happynails: "https://irnano.github.io/capstone1/",
  assetmania: "https://assetmania.herokuapp.com/",
  nagrand: "https://nagrand-hotel.netlify.app/",
};

repo = {
  happynails: "https://github.com/iRNano/capstone1",
  assetmania: "https://github.com/iRNano/assetmgmt",
  nagrand: "https://github.com/iRNano/nagrandhotel",
};

const StyledLayout = styled(Layout)`
  background: ${(props) => props.theme.darkblue};
`;

const Projects = () => {
  const { Content } = Layout;

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
            <Col xs={24} lg={8}>
              <Card
                cover={happnails}
                title="Happy Nails"
                desc="Static Website"
                skills={skills.happynails}
                website={links.happynails}
                repo={repo.happynails}
              />
            </Col>
            <Col xs={24} lg={8}>
              <Card
                cover={assetmania}
                title="Asset Mania"
                desc="IT Asset Management System"
                skills={skills.assetmania}
                website={links.assetmania}
                repo={repo.assetmania}
              />
            </Col>
            <Col xs={24} lg={8}>
              <Card
                cover={nagrand}
                title="Nagrand Resort & Spa"
                desc="Hotel Booking System"
                skills={skills.nagrand}
                website={links.nagrand}
                repo={repo.nagrand}
              />
            </Col>
          </Row>
        </Content>
      </StyledLayout>
    </Wrapper>
  );
};

export default Projects;
