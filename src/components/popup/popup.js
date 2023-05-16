import React, {useState} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {createPortal} from "react-dom";

const PopupContainer = styled.div`
height: 200px;
background: #D9D9D9; 
color: black;
padding: 20px;
margin: 20px 0;
border-radius: 10px;
z-index: 6;
display: flex;
justify-content: space-evenly;
align-items: center;
width: 500px;
top: 30vh;
left: calc(50% - 200px);
bottom: 70px;
position:  absolute;
box-shadow: 0px 4px 23px 0px rgba(34, 60, 80, 0.97);
opacity: 1;
`
const Blur = styled.div`
width: 100%;
height: 100%;
position: absolute;
z-index: 4;
background: rgba(0, 0, 0, .7);
`

const Popup = ({onSubmitCallback, open, setopen}) => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }
    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    async function handleSubmit(e){
        e.preventDefault();
        console.log('Sending... name: ', name, ', title: ',title);
        onSubmitCallback(name, title);
        setopen(false);

    }

    return (<>
            {open&&createPortal(<>
                <Blur>
                <PopupContainer>
                    <h2>Add new post</h2>
                    <button onClick={()=>setopen(false)}>Close</button>
                    <form onSubmit={handleSubmit}>
                        <div>Post name: <input type="text" onChange={handleNameChange}/></div>
                        <div>Title name: <input type="text" onChange={handleTitleChange}/></div>
                        <button type={"submit"}>Submit</button>
                    </form>
                </PopupContainer>
                </Blur>
            </>, document.body)   }

        </>

    );
};

export default Popup;