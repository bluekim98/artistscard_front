import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function Title({title}) {
    return (
        <Wrapper>
            <StyledTitle>{title}</StyledTitle>
        </Wrapper>
    ); 
}

export default Title
