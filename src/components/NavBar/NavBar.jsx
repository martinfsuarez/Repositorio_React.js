import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">E-commerce</Link>

                <ul className="navbar-nav"> 
                    <li className="nav-item"><NavLink to= "/category/phones" className="nav-link">Telefonos</NavLink></li>
                    <li className="nav-item"><NavLink to= "/category/tablets" className="nav-link">Tablets</NavLink></li>
                    <li className="nav-item"><NavLink to= "/category/notebooks" className="nav-link">Notebooks</NavLink></li>
                </ul>


                <CartWidget/>
            </div>
        </nav>
    );
};



export default NavBar;