import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import RutasPrivadas from "./RutasPrivadas";
import RutasPublicas from "./RutasPublicas";

const AppRouter = () => {
  const { auth, verifyingToken } = useContext(AuthContext);  

  useEffect(() => {
    verifyingToken();
  }, [verifyingToken]);

  return (
    <>
      <Router>{auth.authStatus ? <RutasPrivadas /> : <RutasPublicas />}</Router>
    </>
  );
};

export default AppRouter;
