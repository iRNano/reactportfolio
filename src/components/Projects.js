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
                                        HTML
                                        CSS
                                        BOOTSTRAP
                                        JAVASCRIPT
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
                                        PHP
                                        CSS
                                        LARAVEL
                                        BOOTSTRAP
                                        JAVASCRIPT
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
                                        HTML
                                        CSS
                                        JAVASCRIPT
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