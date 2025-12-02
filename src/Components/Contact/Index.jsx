import { useState } from "react";
import { useRef } from "react";
const Contact = () => {
    const [todo, settodo] = useState([]);
    const inputref = useRef(null)
    const add = () => {
        settodo(todo.concat(inputref.current.value))
        console.log(todo);
       }
 const deleteTodo=(id)=>{
    settodo(todo.filter((ele)=>ele.id!==id))
 }
    return <>
        <div>
            <input ref={inputref} />
            <button onClick={add}>Add</button>
        </div>
        <ul>{
            todo.map((ele) => (
                <li>{ele}
                <button onClick={()=>deleteTodo(ele.id)}>X</button></li>
            ))
        }

        </ul>
    </>
}
export default Contact