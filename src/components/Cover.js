import React from 'react'
import {Layout, Row, Col, Avatar} from 'antd'
import 'antd/dist/antd.css';
import styled from 'styled-components'
import profilepic from '../assets/images/profilepicture.png'
import Heading from '../shared/Heading'
import Button from '../shared/Button'
import {GithubOutlined, LinkedinOutlined, GitlabOutlined, FacebookOutlined} from '@ant-design/icons'



const ContentDiv = styled.div`
    min-height:100vh;
    width:80%;
    margin: 0 auto;

`;

const ProfilePic = styled.img.attrs(
    {
        src: profilepic
    }
)`
    
    @media all and (min-width:1001px){
        max-width:350px;
        border-radius: 75%;
    }

    @media all and (max-width: 1000px){
        max-width:200px;
        border-radius:75%;
    }

    @media all and (max-width: 700px){
        max-width: 100px;
        border-radius: 75%;
    }
`

const IconSizes = styled.div`
    width: 120px;
    display:flex;
    justify-content: space-between;
    @media all and (min-width:1001px){
        font-size: 30px;
    }

    @media all and (max-width: 1000px){
        font-size: 20px;
    }

    @media all and (max-width: 700px){
        font-size: 10px;
    }

`

const Cover = () =>  {

const {Content} = Layout
    return(
        <Layout style={{"padding-top": 100}}>
            <Content>
                <ContentDiv>
                    <Row >
                        <Col offset={3}span={9}>
                            {/* <Avatar shape="circle" size="large" src={profilepic}></Avatar> */}
                            <ProfilePic></ProfilePic>
                        </Col>
                        <Col style={{paddingTop:50}}span={10}>
                            <Heading.H1 style={{margin:0}}>ADRIAN </Heading.H1>
                            <Heading.H1>VALDEPEÑAS</Heading.H1>
                            <Heading.H3>Full Stack Web Developer</Heading.H3>
                            <Button>DOWNLOAD RESUME</Button>
                            <IconSizes>
                                <GithubOutlined />
                                <GitlabOutlined />
                                <LinkedinOutlined />
                            </IconSizes>
                            

                        </Col>
                    </Row>

                </ContentDiv>
                
            </Content>
        </Layout>
    )
}

export default Cover;