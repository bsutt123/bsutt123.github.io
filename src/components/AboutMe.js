import React, {Component} from 'react';
import styled from 'styled-components';

class AboutMe extends Component {
    render() {
        return (
            <div>
                I'm Brady Sutton
            </div>
        )
    }
}

const ColorBox = styled.div`
    display: flex;
    text-align: center;
    padding: 10px;
    margin:20px;
    background: var(--primary-light);
    width:200px;
    justify-content: center;
    align-items: center;
    height: 200px;
`
const FlexedDivBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

export default AboutMe;
