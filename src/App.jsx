import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Route,Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
       <NavBar/>
       <Routes>
         <Route path="/" element={<ItemListContainer/>}/>
         <Route path="/book/:id" element={<ItemDetailContainer/>}></Route>
         <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
