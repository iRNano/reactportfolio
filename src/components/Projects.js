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
    background-color: white;
`

const ButtonsDiv = styled.div`
    display:flex;
    justify-content:space-between;
    width:60%;

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
    const {Meta} = Card;

    const onClickHandler = () => {
        alert('click')
    }
    return(
        
            <Layout style={{"background-color":"white"}}>
                <Content>
                    <ProjectsDiv>
                        <Heading.H1 style={{padding: "1em 0em", "text-align": "center"}}>Projects</Heading.H1>
                        <Row gutter={40}>
                            <Col xs={24} lg={8}>
                                <Card
                                    
                                    bordered={false}
                                    cover={
                                        <img src={happnails}></img>
                                    }
                                    bodyStyle={{"padding":"20px 0px"}}
                                >
                                    <Meta title={<Heading.H3>Happy Nails</Heading.H3>}
                                        description={
                                        <div>
                                            <p>Static Website</p>
                                            <SkillsDiv>
                                                <TagsUL>
                                                    <li>HTML</li>
                                                    <li>CSS</li>
                                                    <li>BOOTSTRAP</li>
                                                    <li>JAVASCRIPT</li>
                                                </TagsUL>
                                                
                                            </SkillsDiv>
                                            <ButtonsDiv>
                                                <a href="https://irnano.github.io/capstone1/" target="_blank"><Button size="small">VIEW WEBSITE</Button></a>
                                                <a href="https://github.com/iRNano/capstone1" target="_blank"><Button size="small">VIEW CODE</Button></a>
                                            </ButtonsDiv> 
                                        </div>
                                    }>
                                    </Meta>        
                                </Card>
                            </Col>
                            <Col xs={24} lg={8}>
                                <Card
                                    bodyStyle={{"padding":"20px 0px"}}
                                    bordered={false} 
                                    cover={
                                        <img src={assetmania}></img>
                                    }
                                >
                                    <Meta 
                                        title={<Heading.H3>Asset Mania</Heading.H3>}
                                        description={
                                            <div>
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
                                            </div>
                                        }
                                    >                                    
                                    </Meta>                                    
                                </Card>
                            </Col>    
                            <Col xs={24} lg={8}>
                                <Card
                                    bordered={false}
                                    cover={
                                        <img src={nagrand}></img>
                                    }
                                    bodyStyle={{"padding":"20px 0px"}}
                                >
                                    <Meta
                                        title={<Heading.H3>Nagrand Resort & Spa</Heading.H3>}
                                        description={
                                            <div>
                                                <p>Reservation System</p>
                                                <SkillsDiv>
                                                    <TagsUL>
                                                        <li>REACTJS</li>
                                                        <li>EXPRESSJS</li>
                                                        <li>NODEJS</li>
                                                        <li>MONGODB</li>
                                                    </TagsUL>
                                                </SkillsDiv>
                                                <ButtonsDiv>
                                                    <a href="https://nagrand-hotel.netlify.app/" target="_blank"><Button size="small">VIEW WEBSITE</Button></a>
                                                    <a href="https://github.com/iRNano/nagrandhotel" target="_blank"><Button size="small">VIEW CODE</Button></a>
                                                </ButtonsDiv>
                                            </div>
                                        }
                                    >
                                    </Meta>                
                                </Card>
                            </Col>
                        </Row>
                    </ProjectsDiv>
                </Content>
            </Layout>
    )
}

export default Projects;