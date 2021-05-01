import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${props => props.color};
  background: white;
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

function SmallButton({title="", color="black" ,onClick=()=>{}}) {
    return <StyledButton color={color} onClick={()=>onClick()}>{title}</StyledButton>;
};

export default SmallButton;
