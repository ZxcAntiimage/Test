import Like from "../assets/Like.png"
import Pizza from "../assets/pizza.jpg"
import Delete from "../assets/Delete.png"
import Fav from "../assets/Fav.png"
import NoLike from "../assets/NoLike.png"
import {  useState, useEffect  } from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


const Product = ({addFavProduct}) =>{

    const product = { id: 1, name: `${<Link to="/product/:id">Пицца</Link>}`, sub:"300 руб",  };
    const products = useSelector((state) => state.products);
    const handleAddToFav = () => {
        addFavProduct(product);
      };

      

    const [like, setLike] = useState(NoLike)
      
      const changeLike = () =>{
          setLike(like !== Like ? Like : NoLike)
          
      }
  
      const removeNode = (idx) => document.getElementById(`id-${idx}`).remove();
      const [showComponent, setShowComponent] = useState(true);

      useEffect(() => {
        return () => {
          console.log('Компонент удален');
        };
      }, []);

      const delAddonCard = () => {
        setShowComponent(false);
      };

      return(
        <div className="w-[800px] mx-auto container flex flex-col ">
              <p className="products font-bold text-3xl mt-5 ">Products:</p>
              <nav className="list mt-10">
                  <Link className="list-item flex-wrap flex-row text-gray-700 hover:text-blue-900 " to="/product">
                  Все продукты
                  </Link>
                  <Link className="list-item flex-wrap flex-row text-gray-700 hover:text-blue-900 " to="/fav-product">
                  Избранное
                  </Link>
              </nav>
              <div className="cards mt-24 mb-5 flex flex-col justify-center items-center flex-wrap ">
                  <div className="flex-wrap flex justify-center items-center">
                  {Array.from({ length: 10 }).map((item, idx) => (
                      <div id={`id-${idx}`} key={idx} className="card bg-gray-200 mx-10 my-10 w-[240px] h-[340px] flex-wrap">
                      <img className="card-food w-[200px] h-[200px] mx-auto" src={Pizza}/>
                      <Link to={`/product/${idx}`} className="card-title ml-5 text-blue-600">Пицца</Link>
                      <h2 className="card-subtitle ml-5">300 руб</h2>
                      <button onClick={changeLike} value="noLike">
                          <img src={like} className="card-like ml-5 mt-5 w-[32px] h-[32px]"/>
                      </button>
                      <button onClick={()=> removeNode(idx)}>
                          <img src={Delete} className="card-delete ml-5 mt-5 w-[32px] h-[32px]"/>
                      </button>
                      <button onClick={handleAddToFav} className="hover:scale-110 after:scale-50" >
                          <img src={Fav} className="card-fav ml-5 mt-5 w-[32px] h-[32px]"/>
                      </button>
                  </div> 
                  ))}
                  <ul>
                        {products.map(product => (
                        <li key={product.id}>
                            {showComponent &&<div className="card bg-gray-200 mx-10 my-10 w-[240px] h-[340px] flex-wrap">
                                <img className="card-food w-[200px] h-[200px] mx-auto" src={Pizza}/>
                                <Link to={`/product/1`} className="card-title ml-5 text-blue-600">{product.name}</Link>
                                <h2 className="card-subtitle ml-5">{product.price}₽</h2>
                                <button onClick={changeLike} value="noLike">
                                    <img src={like} className="card-like ml-5 mt-5 w-[32px] h-[32px]"/>
                                </button>
                                <button onClick={delAddonCard}>
                          <img src={Delete} className="card-delete ml-5 mt-5 w-[32px] h-[32px]"/>
                      </button>
                                <button onClick={handleAddToFav} className="hover:scale-110 after:scale-50" >
                                    <img src={Fav} className="card-fav ml-5 mt-5 w-[32px] h-[32px]"/>
                                </button>
                            </div>}
                             
                        </li>
                        ))}
                    </ul>
                  </div>
              </div>
          </div>
          
      )
  }
Product.propTypes = {
    children: PropTypes.node,
}
  
  
export default Product;