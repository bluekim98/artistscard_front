import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

function Button({type="", title="", onClick=()=>{}}) {
    return (
        <>
            {
            type === 'primary' ? 
                <StyledButton primary={type} onClick={()=>onClick()}>{title}</StyledButton>   :
                <StyledButton onClick={()=>onClick()}>{title}</StyledButton>
            } 
        </>
    );
}

export default Button
