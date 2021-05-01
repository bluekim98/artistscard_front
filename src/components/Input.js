import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  font-size: 18px;
  width: 400px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
function Input({type, name, title, value, onChange, onKeyUp, refdom}) {
    return (
        <div>
            <StyledInput type={type} name={name} value={value} placeholder={title} 
            onChange={onChange} onKeyUp={onKeyUp} ref={refdom}/>
        </div>        
    );
}

export default Input
