import React, { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
import {
  actualizarProductoService,
  crearProductoService,
  eliminarProductoService,
  obtenerProductoService,
  obtenerProductosService,
} from "../services/products";

const initialState = {
  products: [],
  product: {},
  cart: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  const obtenerProductos = useCallback(async () => {
    const resp = await obtenerProductosService();
    const productos = resp.data.map((obj) => {
      return {
        id: obj._id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
      };
    });

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: productos,
    });
  }, []);

  const crearProducto = async (form) => {
    await crearProductoService(form);
    await obtenerProductos();
  };

  const eliminarProducto = async (id) => {
    await eliminarProductoService(id);
    await obtenerProductos();
  };

  const obtenerProducto = useCallback(async (id) => {
    const res = await obtenerProductoService(id);
    console.log(res.data);
    const producto = {
      id: res.data._id,
      name: res.data.name,
      description: res.data.description,
      price: res.data.price,
    };
    dispatch({
      type: "OBTENER_PRODUCTO",
      payload: producto
    })
  }, []);

  const actualizarProducto = async (id, form) => {
    await actualizarProductoService(id, form);
    await obtenerProducto(id);
  };

  const agregarProductoCarrito = async (product) => {
    const productoEncontrado = globalState.cart.find((cartItem) => cartItem.id === product.id )
    if (!productoEncontrado) {
      dispatch({
        type: "AGREGAR_PRODUCTO_CARRITO",
        payload: product
      })
    } else {
      alert('Producto previamente agregado');
    }
  };

  const eliminarProductoCarrito = (id) => {
    // console.log(id);
    dispatch({
      type: "ELIMINAR_PRODUCTO_CARRITO",
      payload: id
    })
  }

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        product: globalState.product,
        cart: globalState.cart,
        obtenerProductos,
        crearProducto,
        eliminarProducto,
        obtenerProducto,
        actualizarProducto,
        agregarProductoCarrito,
        eliminarProductoCarrito,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
