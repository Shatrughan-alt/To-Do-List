import React from "react";

function ToDoItem(props){


    // const [isDone,setDone]=useState(false);

    // function handleClick(){
    //     setDone(prev=>{
    //         return !prev;
    //     });
    // }


    return ( 
        <div onClick={()=>{
            props.onChecked(props.id);
        }}>
  {/* <li style={{textDecoration:isDone? "line-through" : "none"}}>{props.text}</li>  */}
    <li>{props.text}</li>
    </div>
    )
}
export default ToDoItem;