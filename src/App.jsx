import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Bienvenidos a BOOKWOLRD! La mayor pagina de libros'/>
    </div>
  );
}

export default App;