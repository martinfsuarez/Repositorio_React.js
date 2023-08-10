import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">AÚN MÁS RICO</a>

                <ul className="navbar-nav"> 
                    <li className="nav-item"><a className="nav-link" href="#">Eventos</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                </ul>


                <CartWidget/>
            </div>
        </nav>
    );
};



export default NavBar;