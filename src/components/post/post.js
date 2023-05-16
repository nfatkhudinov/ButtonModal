import React from 'react';
import styled from "styled-components";

const PostContainer = styled.div`
width: 100%;
background: linear-gradient(90deg, #4685FF 0%, #DC2A1E 100%);
background: #D9D9D9; 
color: black;
padding: 20px;
margin-bottom: 20px;
  border-radius: 10px;
`

const Postname = styled.h3`
color: black;
font-weight: 700;
font-size: 16px;`

const PostTitle = styled.p`
color: black;
font-weight: 300;`

const Popup = ({name, id, title, deleteCallback}) => {
    console.log();

    const deleteHandler = ()=>{
        deleteCallback(id)
        console.log("DeleteHandler activated!");
    }

    return (
        <PostContainer>
            <p>ID {id}</p>
            <Postname>{name}</Postname>
            <PostTitle>{title}</PostTitle>
            <button onClick={deleteHandler}>DEL</button>
        </PostContainer>
    );
};

export default Popup;