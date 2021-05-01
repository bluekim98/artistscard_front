import React from 'react';
import styled from "styled-components";

const StyledLabel = styled.div`
    color: ${props => props.color };
    font-weight: ${props => props.type };
    padding-top: 25px;
    padding-left: 20px;
    width: 70px;
`;

function Label({title="", color="palevioletred", type="normal"}) {
    return <StyledLabel color={color} type={type}>{title}</StyledLabel>
};

export default Label;
