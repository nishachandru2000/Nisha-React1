import axios from "axios";
import { useState, useEffect } from "react";
import List from "../List";
function Main(){
    const [data,setData]=useState([]);
    useEffect(() => {
        console.log("Inside useEffect");
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setData(res.data);
            }).catch()
    }, []);
     return (
        <main>
                {data.map((ele) => {
                    return <List name={ele.title}/>
                })
            }
        </main>
        );
}
export default Main;












