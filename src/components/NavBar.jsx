import CartWidget from "./CartWidget";
import logo from "./images/logo.jpg";
import { Link, NavLink } from "react-router-dom";

const NavBar = ()=> {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                <Link className="navbar-brand"  to={"/"}> <img src={logo} width={"200px"} alt="logo copal"/></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <NavLink className="nav-link active" aria-current="page" to={"/category"}>Productos</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/category/Sahumerios"}>Sahumerios</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/category/Sahumadores"}>Sahumadores</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to={"/category/Velas"}>Velas</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                <CartWidget />
                                </div>
                            </div>
                        </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;