import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className="item-list_container">
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemList;
