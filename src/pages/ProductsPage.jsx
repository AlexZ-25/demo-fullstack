import React from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import Title from "../components/Title";

const ProductsPage = () => {
  return (
    <>
      <Title titulo="Pagina de productos" />
      <main className="row ">
        <article className="col-md-4">
          <ProductForm />
        </article>
        <article className="col-md-8">
          <ProductList />
        </article>
      </main>
    </>
  );
};

export default ProductsPage;
