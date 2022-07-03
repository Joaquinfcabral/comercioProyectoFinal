import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './componentes/CartContext/CartContext';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import NavBar from './componentes/NavBar/Navbar'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:id' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/>} />
                <Route path='/cart' element={<Cart/>} />
              </Routes>
            </BrowserRouter>
    </CartContextProvider>

      
    
  );
}

export default App;
