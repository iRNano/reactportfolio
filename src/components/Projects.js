import React from 'react'
import {Layout, Row, Col} from 'antd'
import styled from 'styled-components'
import Heading from '../shared/Heading'
import Button from '../shared/Button'
import {Card} from 'antd'
import happnails from '../assets/images/happnails500.png'
import assetmania from '../assets/images/assetmania500.png'
import nagrand from '../assets/images/nagrand500.png'

const ProjectsDiv = styled.div`
    min-height:100vh;
    width:80%;
    margin: 0 auto;
    background-color: ${props=>props.theme.darkblue};
`

const ButtonsDiv = styled.div`
    display:flex;
`

const TagsUL = styled.ul`
    list-style-type:none;
    display:flex;
    justify-content:space-between;
    padding:0;
    color:white;

    li{
        background-color:grey;
        margin-right:.5rem;
        padding: .25rem;
        font-size: .5rem;
        
    }

`

const SkillsDiv = styled.div`
    display:flex;

`
const StyledLayout= styled(Layout)`
    background:${props=>props.theme.darkblue}
`

const StyledCard = styled(Card)`
    background-color: ${props=>props.theme.darkblue};

`

const StyledImg = styled.img`
    filter:grayscale(100%);
    &:hover{
        filter:grayscale(0%);
    }
`

const StyledP = styled.p`
    color:white;
`

const Projects = () => {
    const {Content} = Layout;
    const {Meta} = Card;

    const onClickHandler = () => {
        alert('click')
    }
    return(
        
            <StyledLayout>
                <Content>
                    <ProjectsDiv>
                        <Heading.H0 location="title" style={{padding: "1em 0em", "text-align": "center"}}>Projects</Heading.H0>
                        <Row gutter={40} style={{"margin-bottom": "4em"}}>
                            <Col xs={24} lg={8}>
                                <StyledCard
                                    
                                    bordered={false}
                                    cover={
                                        <StyledImg class="project" src={happnails}></StyledImg>
                                    }
                                    bodyStyle={{"padding":"20px 0px"}}
                                    style={{"margin": "5% 0%"}}
                                >
                                    <Meta title={<Heading.H3>Happy Nails</Heading.H3>}
                                        description={
                                        <div>
                                            <StyledP class="description">Static Website</StyledP>
                                            <SkillsDiv>
                                                <TagsUL>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>BOOTSTRAP</li>
                                                    <li>JAVASCRIPT</li>
                                                </TagsUL>
                                                
                                            </SkillsDiv>
                                            <ButtonsDiv>
                                                <a href="https://irnano.github.io/capstone1/" target="_blank"><Button size="small">View Website</Button></a>
                                                <a href="https://github.com/iRNano/capstone1" target="_blank"><Button size="small">View Code</Button></a>
                                            </ButtonsDiv> 
                                        </div>
                                    }>
                                    </Meta>        
                                </StyledCard>
                            </Col>
                            <Col xs={24} lg={8}>
                                <StyledCard
                                    bodyStyle={{"padding":"20px 0px"}}
                                    bordered={false} 
                                    cover={
                                        <StyledImg src={assetmania}></StyledImg>
                                    }
                                    style={{"margin": "5% 0%"}}
                                >
                                    <Meta 
                                        title={<Heading.H3>Asset Mania</Heading.H3>}
                                        description={
                                            <div>
                                                <StyledP>IT Asset Management System</StyledP>
                                                <SkillsDiv>
                                                    <TagsUL>
                                                            <li>PHP</li>
                                                            <li>LARAVEL</li>
                                                            <li>MYSQL</li>
                                                    </TagsUL>
                                                </SkillsDiv>
                                                <ButtonsDiv>
                                                    <a href="https://assetmania.herokuapp.com/" target="_blank"><Button size="small">View Website</Button></a>
                                                    <a href="https://github.com/iRNano/assetmgmt" target="_blank"><Button size="small">View Code</Button></a>
                                                </ButtonsDiv>
                                            </div>
                                        }
                                    >                                    
                                    </Meta>                                    
                                </StyledCard>
                            </Col>    
                            <Col xs={24} lg={8}>
                                <StyledCard
                                    bordered={false}
                                    cover={
                                        <StyledImg src={nagrand}></StyledImg>
                                    }
                                    bodyStyle={{"padding":"20px 0px"}}
                                    style={{"margin": "5% 0%"}}
                                >
                                    <Meta
                                        title={<Heading.H3>Nagrand Resort & Spa</Heading.H3>}
                                        description={
                                            <div>
                                                <StyledP>Hotel Booking System</StyledP>
                                                <SkillsDiv>
                                                    <TagsUL>
                                                        <li>REACTJS</li>
                                                        <li>EXPRESSJS</li>
                                                        <li>NODEJS</li>
                                                        <li>MONGODB</li>
                                                    </TagsUL>
                                                </SkillsDiv>
                                                <ButtonsDiv>
                                                    <a href="https://nagrand-hotel.netlify.app/" target="_blank"><Button size="small">View Website</Button></a>
                                                    <a href="https://github.com/iRNano/nagrandhotel" target="_blank"><Button size="small">View Code</Button></a>
                                                </ButtonsDiv>
                                            </div>
                                        }
                                    >
                                    </Meta>                
                                </StyledCard>
                            </Col>
                        </Row>
                    </ProjectsDiv>
                </Content>
            </StyledLayout>
    )
}

export default Projects;