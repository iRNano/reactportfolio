import React from 'react'
import {Layout, Row, Col} from 'antd'
import 'antd/dist/antd.css';
import styled from 'styled-components'

//images
import profilepic from '../assets/images/profpicgray.png'
import github from '../assets/images/githubgray.png'
import gitlab from '../assets/images/gitlabgray.png'
import linkedin from '../assets/images/linkedingray.png'
//shared comp
import Heading from '../shared/Heading'
import Button from '../shared/Button'
// import {GithubOutlined, LinkedinOutlined, GitlabOutlined} from '@ant-design/icons'



const StyledLayout = styled(Layout)`
    background:${props=>props.theme.darkblue};    
`

// const StyledContent = styled(Content)`
//     .ant-layout .my-ant-layout{
//         background:red;
//     }
// `
// const StyledRow = styled(Row)`
//     .ant-row{
//         background:transparent;
//     }
// `

// const StyledCol = styled(Col)`
//     .ant-col{
//         background:red;
//     }

// `
const ContentDiv = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    margin:0 auto;
    background-color:${props=>props.theme.darkblue};

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
    

    .icons{
        margin: 5% 5% 0 0;

        @media all and (min-width:1001px){
            max-width: 35px;
        }
    
        @media all and (max-width: 1000px){
            max-width: 20px;
        }
    
        @media all and (max-width: 700px){
            max-width: 30px;
        }
    }

`

const Cover = () =>  {

    const {Content} = Layout
    return(
        <ContentDiv >
            <StyledLayout>
                <Content>                    
                    <Row>
                        <Col lg={{span: 9, offset:3}} xl={{span:7, offset:5}} xs={{offset:2,span:20}}>
                            {/* <Avatar shape="circle" size="large" src={profilepic}></Avatar> */}
                            <ProfilePic></ProfilePic>
                        </Col>
                        <Col style={{paddingTop:50}} lg ={{offset:0, span:12}} xs={{span:20,offset:2}}>
                            <Heading.H1 style={{margin:0}}>Adrian </Heading.H1>
                            <Heading.H1>Valdepeñas</Heading.H1>
                            <Heading.H4>Full Stack Web Developer</Heading.H4>
                            <Button size="small" location="landing">Download Resume</Button>
                            <IconSizes>
                                <img class="icons" src={github}></img>
                                <img class="icons" src={gitlab}></img>
                                <img class="icons" src={linkedin}></img>
                            </IconSizes>
                        </Col>
                    </Row>                    
                </Content>
            </StyledLayout>
        </ContentDiv>
    )
}

export default Cover;