import React from 'react'
import {Layout, Row, Col, Avatar} from 'antd'
import 'antd/dist/antd.css';
import styled from 'styled-components'
import profilepic from '../assets/images/profilepicture.png'
import Heading from '../shared/Heading'



const ContentDiv = styled.div`
    min-height:100vh;

`;

const ProfilePic = styled.img.attrs(
    {
        src: profilepic
    }
)`
    @media all and (min-width:1001px){
        max-width:400px;
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

const Cover = () =>  {

const {Content} = Layout
    return(
        <Layout style={{padding: 100}}>
            <Content>
                <ContentDiv>
                    <Row>
                        <Col offset={2}span={10}>
                            {/* <Avatar shape="circle" size="large" src={profilepic}></Avatar> */}
                            <ProfilePic></ProfilePic>
                        </Col>
                        <Col span={10}>
                            <Heading.H1>Adrian Rozanno C. Valdepeñas</Heading.H1>
                            <Heading.H2>Full Stack Web Developer</Heading.H2>
                        </Col>
                    </Row>

                </ContentDiv>
                
            </Content>
        </Layout>
    )
}

export default Cover;