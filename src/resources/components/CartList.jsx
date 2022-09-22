import React from "react";
import { NavLink } from "react-router-dom";

const CartList = () => {
  return (
    <ul>
      <li>
        <p>{"123456789"}</p>
        <h1>{"Laptop"}</h1>
        <p>{"Computadora personal"}</p>
        <p>{"3456"}</p>
        <NavLink className="btn btn-info" to={`/products/${"123456"}`}>
          Ver mas...
        </NavLink>
        <button className="btn btn-danger">Eliminar</button>
      </li>
    </ul>
  );
};

export default CartList;
