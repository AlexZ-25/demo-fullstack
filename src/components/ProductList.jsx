import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ProductContext from "../context/ProductContext";

const ProductList = () => {
  const { products, obtenerProductos, eliminarProducto } =
    useContext(ProductContext);

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h1>{product.name}</h1>
          <h3>{product.id}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <NavLink to= {`/product/${product.id}`} className="btn btn-info">Ver mas...</NavLink>
          <button
            className="btn btn-danger"
            onClick={() => eliminarProducto(product.id)}
          >
            Eliminar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
