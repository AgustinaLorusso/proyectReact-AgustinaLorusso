
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter,Route,Routes} from "react-router-dom";
import {CartContextProvider} from "./context/cartContext";
import firebaseApp from './services/firebase';
import UserForm from './components/UseForm/UserForm';

function App() {
  console.log(firebaseApp)
  return (
    <div>
      <CartContextProvider>
       <BrowserRouter>
         <NavBar/>
         <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/book/:id" element={<ItemDetailContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<UserForm/>}/>
         </Routes>
       </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
