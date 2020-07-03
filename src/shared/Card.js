import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import Heading from "../shared/Heading";
import Button from "../shared/Button";

const ButtonsDiv = styled.div`
  display: flex;
`;

const TagsUL = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  color: white;

  li {
    background-color: grey;
    margin-right: 0.5rem;
    padding: 0.25rem;
    font-size: 0.5rem;
  }
`;

const SkillsDiv = styled.div`
  display: flex;
`;

const StyledCard = styled(Card)`
  background-color: ${(props) => props.theme.darkblue};
`;

const StyledImg = styled.img`
  filter: grayscale(100%);
  &:hover {
    filter: grayscale(0%);
  }
`;

const StyledP = styled.p`
  color: white;
`;
const Cardd = (props) => {
  const { Meta } = Card;
  const skills = props.skills.map((skill) => <li>{skill}</li>);
  return (
    <StyledCard
      bordered={false}
      cover={<StyledImg class="project" src={props.cover}></StyledImg>}
      bodyStyle={{ padding: "20px 0px" }}
      style={{ margin: "5% 0%" }}
    >
      <Meta
        title={<Heading.H3>{props.title}</Heading.H3>}
        description={
          <div>
            <StyledP class="description">{props.desc}</StyledP>
            <SkillsDiv>
              <TagsUL>{skills}</TagsUL>
            </SkillsDiv>
            <ButtonsDiv>
              <a href={props.website} target="_blank">
                <Button size="small" margin="none">
                  View Website
                </Button>
              </a>
              <a href={props.repo} target="_blank">
                <Button size="small" margin="x">
                  View Code
                </Button>
              </a>
            </ButtonsDiv>
          </div>
        }
      ></Meta>
    </StyledCard>
  );
};

export default Cardd;
