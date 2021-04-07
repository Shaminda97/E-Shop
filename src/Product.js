import React from 'react'
import { useStateValue } from './StateProvider';
import "./style/Product.css";
import {motion} from 'framer-motion';

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  }
    return (
        <motion.div className="product" whileHover = {{scale:1.1}} >
          
          <div className="product__info">
            <p>{title} lean startup</p>
            <p className="product__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
            <div className="product__rating">
              {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
            </div>
          </div>
  
          <img src={image} alt="" />
  
          <button onClick={addToBasket}>Add to Basket</button>    
        </motion.div>
    )
}

export default Product
