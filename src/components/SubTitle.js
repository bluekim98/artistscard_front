import React from 'react'
import styled from 'styled-components';

const StyledTitle = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: black;
`;
const Wrapper = styled.section`
  padding: 1em;
  background: #f5d0d4;
`;

function SubTitle({title}) {
    return (
        <Wrapper>
            <StyledTitle>{title}</StyledTitle>
        </Wrapper>
    ); 
}

export default SubTitle
