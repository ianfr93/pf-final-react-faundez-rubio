import Item from "./Item";
import "./ItemList.css";

export default function ItemList({ products }) {
  return (
    <div className="item-list_container">
      {products.map((product) => (
        <Item key={product.id} item={product} />
      ))}
    </div>
  );
}