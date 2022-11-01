import "./navbar.css"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo ms-3">
          <Link to="/" className="texto">
            <h4 >BOOKWORLD</h4>
          </Link>
        </div>
        <ul className="estilo-navbar me-5">
          <Link to="/category/NuevosLanzamiento" className="texto mt-3" ><h5>Nuevos Lanzamientos</h5></Link> 
          <Link to="/category/BestSeller" className="texto mt-3" ><h5>Best Sellers</h5></Link> 
          <Link to="/category/Preventa" className="texto mt-3" ><h5>Preventas</h5></Link> 
        </ul>
        <Link to="/cart" className=" texto me-3"><CartWidget className="estilo-carrito"/></Link>
      </nav>
    </header>
  )
}

export default NavBar