import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../reducer";
const About=()=>{
    const state=useSelector((state)=>state.counter);
    const dispatch=useDispatch();
    return <>
    <h1>{state.value}</h1>
    <button onclick={()=>dispatch(increment())}>increment</button>
    </>
}
export default About