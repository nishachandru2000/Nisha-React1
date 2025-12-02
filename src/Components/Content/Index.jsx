import "./Content.css"
function Content(props){
    return <div >
        <p>Write high-quality content in few seconds with AI</p>
           <p> Name:{props.name}, Age:{props.age}, Gender:{props.Gender}</p>
    </div>
}
export default Content