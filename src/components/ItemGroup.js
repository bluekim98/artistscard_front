import React from 'react'
import styled from 'styled-components';
import Item from './Item'

const Flex = styled.div`
display: flex;
cursor: pointer;
:hover {
    background-color: #fff5e6;
}
`;

function ItemGroup({music, edit}) {
    return(
        <Flex onClick={()=>edit(music)}>
            <Item title={music.track} color={"black"}/>
            <Item title={music.album} color={"black"} />
            <Item title={music.artist} color={"black"} />
            <audio controls> 
                <source src={music.filepath} type="audio/mp3" /> 
            </audio>
        </Flex>
    );
}

export default ItemGroup
