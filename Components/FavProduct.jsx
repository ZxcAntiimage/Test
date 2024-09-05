import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Pizza from "../assets/pizza.jpg"
import Delete from "../assets/Delete.png"

const FavProduct = ({ favProducts }) => {
  const removeNode = (idx) => document.getElementById(`id-${idx}`).remove();
    return (
      <div>
       <div>
      <h1>Избранные товары</h1>
      <Link className="text-blue-600" to="/product">Вернуться обратно</Link>
      <ul>
        {favProducts.length > 0 ? (
          favProducts.map((product, index) => (
            <li key={index}>
             <div id={`id-${index}`} key={index} className="card bg-gray-200 mx-10 my-10 w-[240px] h-[340px] flex-wrap">
                      <img className="card-food w-[200px] h-[200px] mx-auto" src={Pizza}/>
                      <Link to={`/product/${index}`} className="card-title ml-5 text-blue-600">Пицца</Link>
                      <h2 className="card-subtitle ml-5">300 руб</h2>
                      <button onClick={() => removeNode(index)}>
                          <img src={Delete} className="card-delete ml-5 mt-5 w-[32px] h-[32px]"/>
                      </button>
                  </div> 
              </li>
          ))
        ) : (
          <li>Нет избранных товаров</li>
        )}
      </ul>
    </div>
      </div>
    );
  };

  FavProduct.propTypes = {
    children: PropTypes.node
}

export default FavProduct;