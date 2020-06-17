import React from 'react'
import {Layout, Row, Col} from 'antd'
import styled from 'styled-components'
import Heading from '../shared/Heading'
import Button from '../shared/Button'
import {Card} from 'antd'

const ProjectsDiv = styled.div`
    min-height:100vh;
    width:80%;
    margin: 0 auto;
    background-color: white;
`

const ButtonsDiv = styled.div`
    display:flex;
    justify-content:space-between;
    width:70%;

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



const Projects = () => {
    const {Content} = Layout;
    return(
        
            <Layout style={{"background-color":"white"}}>
                <Content>
                    <ProjectsDiv>
                        <Heading.H1 style={{padding: "1em 0em", "text-align": "center"}}>Projects</Heading.H1>
                        <Row gutter="2">
                            <Col span={8}>
                                <Card 
                                    title="CP1"
                                    
                                >
                                    <Heading.H1>Happy Nails</Heading.H1>
                                    <p>Static Website</p>
                                    <SkillsDiv>
                                        <TagsUL>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>BOOTSTRAP</li>
                                        </TagsUL>
                                        
                                    </SkillsDiv>
                                    <ButtonsDiv>
                                        <a href="https://irnano.github.io/capstone1/" target="_blank"><Button size="small">VIEW WEBSITE</Button></a>
                                        <a href="https://github.com/iRNano/capstone1" target="_blank"><Button size="small">VIEW CODE</Button></a>
                                    </ButtonsDiv>
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card 
                                    title="CP2"
                                    
                                >
                                    <Heading.H1>Asset Mania</Heading.H1>
                                    <p>Asset Management System</p>
                                    <SkillsDiv>
                                        <TagsUL>
                                                <li>PHP</li>
                                                <li>LARAVEL</li>
                                                <li>MYSQL</li>
                                        </TagsUL>
                                    </SkillsDiv>
                                    <ButtonsDiv>
                                        <a href="https://assetmania.herokuapp.com/" target="_blank"><Button size="small">VIEW WEBSITE</Button></a>
                                        <a href="https://github.com/iRNano/assetmgmt" target="_blank"><Button size="small">VIEW CODE</Button></a>
                                    </ButtonsDiv>
                                </Card>
                            </Col>    
                            <Col span={8}>
                                <Card 
                                    title="CP3"
                
                                >
                                    <Heading.H1>Nagrand Resort & Spa</Heading.H1>
                                    <p>Reservation System</p>
                                    <SkillsDiv>
                                        <TagsUL>
                                            <li>REACT</li>
                                            <li>BOOTSTRAP</li>
                                            <li>NODE</li>
                                            <li>MONGODB</li>
                                        </TagsUL>
                                    </SkillsDiv>
                                    <ButtonsDiv>
                                        <a href="https://nagrand-hotel.netlify.app/" target="_blank"><Button size="small">VIEW WEBSITE</Button></a>
                                        <a href="https://github.com/iRNano/nagrandhotel" target="_blank"><Button size="small">VIEW CODE</Button></a>
                                    </ButtonsDiv>                  
                                </Card>
                            </Col>
                        </Row>
                    </ProjectsDiv>
                </Content>
            </Layout>
    )
}

export default Projects;