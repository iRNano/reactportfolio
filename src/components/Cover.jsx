import { useEffect, useState } from "react";
import { Row } from "antd";
import "antd/dist/antd.css";

import Wrapper from "../layouts/Wrapper";

//images

import github from "../assets/images/githubgray.png";
import linkedin from "../assets/images/linkedingray.png";
//shared comp
import Heading from "../shared/Heading";
import Button from "../shared/Button";
import StyledAntDLayout from "../shared/StyledAntDLayout";
import { getCV } from "../helper";
import { ContentDiv, ProfilePic, IconSizes} from "./Cover.style";

const Cover = () => {
  const [cv, setCV] = useState(null)
  const cvLoaded = !!localStorage.getItem('cv_links');
  console.log('cvLoaded', cvLoaded);
  useEffect(()=>{
    if(cvLoaded) setCV(JSON.parse(localStorage.getItem('cv_links')));
    if(!cvLoaded) {
      setCV(JSON.parse(fetchCV()));
    }

  },[])

  console.log('cv', cv)
  console.log('cv', cv?.view)

  const fetchCV = async () => {
    return await getCV();
  }
  return (
    <Wrapper>
      <ContentDiv>
        <StyledAntDLayout.StyledLayout>
          <Row justify="center" gutter={24} style={{ margin: 0 }}>
            <StyledAntDLayout.StyledCol
              location="profilepic"
              lg={{ span: 10 }}
              xl={{ span: 10 }}
              xs={{ offset: 0, span: 24 }}
            >
              <ProfilePic></ProfilePic>
            </StyledAntDLayout.StyledCol>
            <StyledAntDLayout.StyledCol lg={{ span: 10 }} xs={{ span: 24 }}>
              <Heading.H1 style={{ margin: 0 }}>Adrian </Heading.H1>
              <Heading.H1 style={{ margin: 0 }}>Valdepeñas</Heading.H1>
              <Heading.H4>Frontend Developer</Heading.H4>
              {
                cv && (
              <a
                href={!!cv ? cv.view : cv.download}
                download
                target="_blank"
              >
                <Button size="small" location="landing" margin="y">
                  Download Resume
                </Button>
              </a>

                )
              }
              <IconSizes>
                <a href="https://github.com/iRNano" target="_blank">
                  <img className="icons" src={github}></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/adrianvaldepenas/"
                  target="_blank"
                >
                  <img className="icons" src={linkedin}></img>
                </a>
              </IconSizes>
            </StyledAntDLayout.StyledCol>
          </Row>
        </StyledAntDLayout.StyledLayout>
      </ContentDiv>
    </Wrapper>
  );
};

export default Cover;
