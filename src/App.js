import styled from "styled-components";
import {useState} from "react";
import Post from "./components/post/post";
import Popup from "./components/popup/popup";


const Container = styled.div`
width: 700px;
display: flex;
flex-direction: column;
justify-content: center;
padding: 20px;
`

function App() {

    const [items, setItems] = useState([
        {id: 0, name: "First card", title: "Its first card created!"},
        {id: 1, name: "Second card", title: "Its second card created!"},
        {id: 2, name: "Third card", title: "Its third card created!"},
    ])

    const showItems = () => items.map(i=><Post key={i.id} id={i.id} name={i.name} title={i.title} deleteCallback={deleteItem}/>)


    const updateData = (n ,t)=>{
        setItems([...items, {key: (items.length), id: (items.length), name: `${n}`, title: `${t}`}]);
    }

    const deleteItem = (id)=>{
        setItems(items.filter(obj => obj.id !== id))
        console.log("Delete responce from MAIN");
    }

    const [open, setOpen] = useState(false)

        return (
    <div className="App">
        <Container>
                   <h1>HelloWorld!</h1>
                   <h2>Test for button</h2>
                    {showItems()}
                    <button onClick={()=>setOpen(true)}>Open</button>
        </Container>
        <Popup onSubmitCallback={updateData} open={open} setopen={setOpen}/>
    </div>
  );
}

export default App;
