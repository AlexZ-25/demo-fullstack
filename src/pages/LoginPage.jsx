import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";

const initForm = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
  //const [auth, setAuth] = useState({});
  const { auth, login } = useContext(AuthContext);

  const handleForm = async (e) => {
    // Previene que la pagina se cargue por default
    e.preventDefault();
    login(form);
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title titulo="Login" />
      <section>
        <article>
          <p>{auth.id}</p>
        </article>
      </section>
      <main className="row">
        <article className="col">
          <form onSubmit={handleForm}>
            <div className="form-group mt-3">
              <label htmlFor="InputUsername">User name</label>
              <input
                type="text"
                className="form-control"
                id="InputUsername"
                aria-describedby="emailHelp"
                placeholder="Enter user name"
                onChange={cambio}
                value={form.username}
                name="username"
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="inputPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={cambio}
                value={form.password}
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-success mt-3">
              Iniciar
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default LoginPage;
