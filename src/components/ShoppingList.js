import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
    const [categoryBy,setCategory]=useState('All')
    function handleChange(event){
        setCategory(event.target.value)
    }
    const filteredList=items.filter(element=>{
        if(categoryBy==='All'){
            return true;
        }else{
            return element.category===categoryBy
        }
    })
  return (
    <div className="ShoppingList">
      <div className="Filter" onChange={handleChange}>
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
