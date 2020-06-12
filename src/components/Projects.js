import React from 'react'
import {Layout, Row, Col} from 'antd'
import styled from 'styled-components'

const ProjectsDiv = styled.div`
    min-height:100vh;

`


const Projects = () => {
    const {Content} = Layout;
    return(
        
            <Layout>
                <Content>
                    <ProjectsDiv>
                        <Row>
                            <Col span={8}>CP1</Col>
                            <Col span={8}>CP2</Col>
                            <Col span={8}>CP3</Col>
                        </Row>
                    </ProjectsDiv>
                </Content>
            </Layout>
    )
}

export default Projects;