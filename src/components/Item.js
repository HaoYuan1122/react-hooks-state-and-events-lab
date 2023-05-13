import React,{useState} from "react";

function Item({ name, category }) {
    const [inCart,setCart]=useState(false)
    const className=inCart?"in-cart":""
    const buttonClassName=inCart?"remove":"add"
    function handleLi(){
        setCart(pre=>!pre)
    }
  return (
    <li className={className} onClick={handleLi}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonClassName}>{inCart?'Remove from Cart':'Add to Cart'}</button>
    </li>
  );
}

export default Item;
