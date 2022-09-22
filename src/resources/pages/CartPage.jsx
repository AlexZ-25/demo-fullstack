import React from "react";
import CartList from "../components/CartList";
import Title from "../components/Title";

const CartPage = () => {
  return (
    <>
      <Title titulo="Carrito de compras" />
      <main className="row pt-5">
        <article className="col-md-12">
          <CartList />
        </article>
      </main>
      <section className="row pt-5">
        <article className="col-md-12">
          <h2>0</h2>
        </article>
      </section>
    </>
  );
};

export default CartPage;
