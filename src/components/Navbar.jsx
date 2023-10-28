import { Link } from "react-router-dom";
import "../assets/css/style.css"

const Navbar = () =>{
    return(
        <div className="navbar">
            <Link to="/home">Home</Link>
            <Link to="/contacto">Contacto</Link>
        </div>

    )
}
export default Navbar;