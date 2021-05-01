import React from 'react';
import styled from "styled-components";

const StyledItem = styled.div`
    color: ${props => props.color };
    font-weight: ${props => props.type };
    margin: 10px;
    width: 100px;
`;

function Item({title, color="palevioletred", type="normal"}) {
    return (
        <StyledItem color={color} type={type}>{title}</StyledItem>
    );
}

export default Item
