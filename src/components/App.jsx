import React from "react";
import { useState } from "react";
import ToDoItem from "./ToDoItem";

function App(){
    const [inputText,setInputText]=useState("");
    const [items,setItems]=useState([]);

    function handleChange(event){
        const newValue=event.target.value;
        setInputText(newValue);
    }
    function addItem(){
        setItems(prev=>{
            return [...prev,inputText];
        })
        setInputText("");
    }
    function deleteItem(id){
        setItems(prev=>{
            return prev.filter((item,index)=>{
                return index !== id;
            });
        });
    }

    return(
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
            <input onChange={handleChange} type="text" value={inputText} />
            <button onClick={addItem}>
            <span>Add</span>
            </button>
            </div>
            <div>
                <ul>
                   {/* { items.map((item)=>{
                        return <li>{item}</li>
                    })} */}
                    { items.map((todoItem,index)=>(<ToDoItem key={index} id={index}
                    text={todoItem}
                    onChecked={deleteItem}
                    />))}
                </ul>
            </div>
        </div>
    );
}
export default App;