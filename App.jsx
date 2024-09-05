import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import FavProduct from './Components/FavProduct'
import Product from './Components/Product'
import Pizza from './Components/Pizza'
import { useState } from 'react'
import CreateProduct from './Components/CreateProduct'
import { Provider } from 'react-redux';
import store from './Components/store'

const App = () =>{

  const [favProducts, setFavProducts] = useState([]);

  const addFavProduct = (product) => {
    setFavProducts((prev) => [...prev, product]);
  };

  const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

  return(

    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Product addFavProduct={addFavProduct} products={products}  />} />
        <Route path="/product" element={<Product addFavProduct={addFavProduct} products={products} />} />
        <Route path="/fav-product" element={<FavProduct favProducts={favProducts} />} />
        <Route path="/product/:id" element={<Pizza />} />
        <Route path="/create-product" element={<CreateProduct addProduct={addProduct}/>} />
        </Routes>
      </Router>
    </Provider>

  )

}




export default App