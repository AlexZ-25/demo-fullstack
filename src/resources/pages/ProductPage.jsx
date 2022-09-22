import React, { useEffect } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  useEffect(() => {
    console.log(id);
  }, [id]);

  return (
    <>
      <Title titulo="Pagina de producto" />
      <main className="row pt-5">
        <article className="col-md-4">Aqui va el formulario</article>
        <article className="col-md-8">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
              className="card-img-top"
              alt={"Laptop"}
            />
            <div className="card-body">
              <h5 className="card-title">{"Laptop"}</h5>
              <p className="card-text">{"Computadora personal"}</p>
              <p className="card-text">{500}</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default ProductPage;
