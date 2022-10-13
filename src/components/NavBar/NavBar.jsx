import "./navbar.css"
import CartWidget from "./CartWidget"
import {Link} from "react-router-dom"


function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <h4>BOOKWORLD</h4>
          </Link>
        </div>
        <ul className="estilo-navbar">
          <Link to="/category/NuevosLanzamiento"><li>Nuevos Lanzamientos</li></Link> 
          <Link to="/category/BestSeller"><li>Best Sellers</li></Link> 
          <Link to="/category/Preventa"><li>Preventas</li></Link> 
        </ul>
        <CartWidget className="estilo-carrito"/>
      </nav>
    </header>
  )
}
/*<ul className="estilo-navbar">
          <Link to="/category/NuevosLanzamiento"><li>Nuevos Lanzamientos</li></Link> 
          <Link to="/category/BestSeller"><li>Best Sellers</li></Link> 
          <Link to="/category/Preventa"><li>Preventas</li></Link> 
        </ul>*/
export default NavBar