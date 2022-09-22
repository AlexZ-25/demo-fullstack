import React, { useContext, useEffect, useState } from "react";
import CartList from "../components/CartList";
import Title from "../components/Title";
import ProductContext from "../context/ProductContext";
import PaypalCheckoutButton from "../components/PaypalCheckoutButton";

const CartPage = () => {
  const { cart } = useContext(ProductContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, producto) => acc + producto.price, 0));
  }, [cart]);

  return (
    <>
      <Title titulo="Carrito de compras" />
      <main className="row pt-5">
        <article className="col-md-12">
          <CartList />
        </article>
      </main>
      {cart.length > 0 ? (
        <>
          <section className="row pt-5">
            <article className="col-md-12">
              <h2>{total}</h2>
            </article>
          </section>
          <section className="row">
            <article className="col">
              <PaypalCheckoutButton
                currency={"MXN"}
                amount={total}
                showSpinner={true}
              />
            </article>
          </section>
        </>
      ) : (
        <section className="row">
          <article className="col">
            <h2>No hay productos en el carrito</h2>
          </article>
        </section>
      )}
    </>
  );
};

export default CartPage;
