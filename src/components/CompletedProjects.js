import React, {Component} from 'react';
import styled from 'styled-components';

class CompletedProjects extends Component {
    render() {
        return (
            <div>
                <div>
                    click on one of the projects to see a details
                </div>
                <FlexDiv>
                    <ProjectLink />
                    <ProjectLink />
                    <ProjectLink />

                </FlexDiv>
            </div>

        )
    }
}

const ProjectLink = (props) => {
    return (
        <Box>
            I'm a project!
        </Box>
    )
}
const Box = styled.div`
    width:200px;
    height: 200px;
    margin: 20px;
    border: 1px;
`
const FlexDiv = styled.div`
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
`

export default CompletedProjects;
