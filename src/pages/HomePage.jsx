import React from "react";
import ProductList from "../components/ProductList";
import Title from "../components/Title";

const HomePage = () => {
  return (
    <>
      {/* <ProductList/> */}
      <Title titulo="Pagina de inicio" />
      <main className="row pt-5">
        <article className="col">
          <p>Contenido de la pagina de inicio</p>
        </article>
      </main>
    </>
  );
};

export default HomePage;
