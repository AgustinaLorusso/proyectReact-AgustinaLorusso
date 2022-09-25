import "./navbar.css"
import CartWidget from "./CartWidget"

function NavBar() {
  return (
    <header className="header">
        <nav className="navbar">
            <div className="logo">
                <h4>BOOKWORLD</h4>
            </div>
            <ul className="estilo-navbar">
                <a href="#" className="texto"><li>Categorias</li></a>
                <a href="#" className="texto"><li>Nuevos Lanzamientos</li></a>
                <a href="#" className="texto"><li>Proximamente</li></a>
            </ul>
           <CartWidget className="estilo-carrito"/>
        </nav>
    </header>
  )
}

export default NavBar