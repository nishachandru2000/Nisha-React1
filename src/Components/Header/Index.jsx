import "./Header.css"
import { Link } from "react-router-dom"
function Header(){
    return <header>
        <Link to={"/"}>Home</Link>
        <Link to={"/About"}>About</Link>
        <Link to={"/Contact"}>Contact</Link>
        <h1>This is a Paragraph</h1>
        </header>
       }
export default Header