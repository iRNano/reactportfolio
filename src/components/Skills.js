import React from 'react'
import {Layout, Row, Col} from 'antd'
import styled from 'styled-components'
import Heading from '../shared/Heading'
import html from '../assets/images/html5.png'
import css from '../assets/images/css3.png'
import js from '../assets/images/javascript.png'
import react from '../assets/images/react.png'
import php from '../assets/images/php.png'
import bootstrap from '../assets/images/bootstrap.png'
import node from '../assets/images/nodejs.png'
import express from '../assets/images/express.png'
import antd from '../assets/images/antdesign.png'
import jquery from '../assets/images/jquery.png'
import styledicon from '../assets/images/styled.png'
import mongodb from '../assets/images/mongodb.png'
import laravel from '../assets/images/laravel.png'
import git from '../assets/images/git.png'
import mysql from '../assets/images/mysql.png'



const StyledLayout = styled(Layout)`
    background:${props=>props.theme.darkblue};
    min-height:100vh;
    text-align:center;
`

const StyledSkill = styled.div`
    text-align:center;
    .skill {
        @media all and (min-width:1200px){
            max-width: 80px;
        }
    
        @media all and (max-width: 1199px){
            max-width: 60px;
        }
    
        @media all and (max-width: 700px){
            max-width: 50px;
        }
    }
`
const StyledRow = styled(Row)`
    margin:0 auto;
    //lg
    @media all and (min-width:1200px){
        width:50%
    }
    //md
    @media all and (max-width: 1199px){
        width:60%
    }
    //sm
    @media all and (max-width: 991px){
        width:60%;
    }

    //xs
    @media all and (max-width: 767px){
        width:80%;
    }
`
const StyledCol = styled(Col)`
    //lg
    @media all and (min-width:1200px){
        width:20%
    }
    //md
    @media all and (min-width: 992px){
        width:20%;
    }
    //sm
    @media all and (min-width: 768px){
        width:20%;
    }

    //xs
    @media all and (max-width: 767px){
        width:33%;
    }

    
    
`
const Skills = () => {
    const {Content} =Layout;
    return(
        <StyledLayout>
            <Content >
                <Heading.H0 class="line" location="title" style={{padding: "1em 0em"}} size="large">Skills</Heading.H0>
                <StyledRow justify="center" gutter={[0,32]}>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill" src={html}></img> 
                            <Heading.H4 location="skills">HTML</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={css}></img> 
                            <Heading.H4 location="skills">CSS</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={js}></img> 
                            <Heading.H4 location="skills">Javascript</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={bootstrap}></img> 
                            <Heading.H4 location="skills">Bootstrap</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={jquery}></img> 
                            <Heading.H4 location="skills">jQuery</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                {/* </Row>
                <Row justify="center" gutter={[0,24]}> */}
                    <StyledCol>
                        <StyledSkill>
                            <img class="skill"src={react}></img> 
                            <Heading.H4 location="skills">React</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={antd}></img> 
                            <Heading.H4 location="skills">Ant Design</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={styledicon}></img> 
                            <Heading.H4 location="skills">Styled Components</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={node}></img> 
                            <Heading.H4 location="skills">Node</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={express}></img> 
                            <Heading.H4 location="skills">Express</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                {/* </Row>
                <Row justify="center"> */}
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={mongodb}></img> 
                            <Heading.H4 location="skills">MongoDB</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={php}></img> 
                            <Heading.H4 location="skills">PHP</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={laravel}></img> 
                            <Heading.H4 location="skills">Laravel</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={mysql}></img> 
                            <Heading.H4 location="skills">MySQL</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                    <StyledCol >
                        <StyledSkill>
                            <img class="skill"src={git}></img> 
                            <Heading.H4 location="skills">Git</Heading.H4>
                        </StyledSkill>
                    </StyledCol>
                </StyledRow>
            </Content>
        </StyledLayout>
    )
}

export default Skills;