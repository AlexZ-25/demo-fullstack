import React from "react";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext"
import ProductState from "./context/ProductState";
import { PayPalScriptProvider } from "@paypal/react-paypal-js"

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const App = () => {
  return (
    <AuthProvider>
      <PayPalScriptProvider
        options={{ "client-id": "AUjQ1P13uy_28CwVZaAevyQAPn7WPHJxlWa0q-qa4iVfwJP1CsujwyAEKijrz5p9_bQBr05Dh-poBVww" }}>
        <ProductState>
          <AppRouter />
        </ProductState>
      </PayPalScriptProvider>
    </AuthProvider>
  );
};

export default App;
