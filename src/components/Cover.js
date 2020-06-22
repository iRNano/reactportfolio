import React from 'react'
import {Layout, Row, Col} from 'antd'
import 'antd/dist/antd.css';
import styled from 'styled-components'
import profilepic from '../assets/images/profilepicture.png'
import Heading from '../shared/Heading'
import Button from '../shared/Button'
import {GithubOutlined, LinkedinOutlined, GitlabOutlined} from '@ant-design/icons'



const ContentDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    margin:0 auto;
    background-color:#f0f2f5;

`;


// background-color: #FF4136;
//   width: 300px;
//   height: 300px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
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
        max-width: 280px;
        border-radius: 75%;
    }
`

const IconSizes = styled.div`
    width: 120px;
    display:flex;
    justify-content: space-between;
    font-size: 30px;
    // @media all and (min-width:1001px){
    //     font-size: 30px;
    // }

    // @media all and (max-width: 1000px){
    //     font-size: 20px;
    // }

    // @media all and (max-width: 700px){
    //     font-size: 30px;
    // }

`

const Cover = () =>  {

const {Content} = Layout
    return(
        <ContentDiv>
        <Layout >
            <Content>
                {/* <ContentDiv> */}
                    <Row style={{"background-color": "#f0f2f5"}}>
                        <Col lg={{span: 9, offset:3}} xl={{span:7, offset:5}} xs={{offset:2,span:20}}>
                            {/* <Avatar shape="circle" size="large" src={profilepic}></Avatar> */}
                            <ProfilePic></ProfilePic>
                        </Col>
                        <Col style={{paddingTop:50}} lg ={{offset:0, span:12}} xs={{span:20,offset:2}}>
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

                {/* </ContentDiv> */}
                
            </Content>
        </Layout>
        </ContentDiv>
    )
}

export default Cover;