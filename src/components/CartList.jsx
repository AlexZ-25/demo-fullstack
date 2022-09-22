import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const CartList = () => {
  const { cart, eliminarProductoCarrito } = useContext(ProductContext);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <ul>
      {cart?.map((producto) => (
        <li key={producto.id}>
          <p>{producto.id}</p>
          <p>{producto.name}</p>
          <p>{producto.descripcion}</p>
          <p>{producto.price}</p>
          <NavLink className="btn btn-info" to={`/product/${producto.id}`}>
            Ver mas...
          </NavLink>
          <button
            className="btn btn-danger"
            onClick={() => eliminarProductoCarrito(producto.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CartList;
