import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavbarPrivado from "../components/NavbarPrivado";
import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProductsPage from "../pages/ProductsPage";
import ProfilePage from "../pages/ProfilePage";

const RutasPrivadas = () => {
  return (
    <>
      <NavbarPrivado />
      <div className="container pt-5">
        <Routes>
          {/* Rutas exclusivamente privadas */}
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          {/* Rutas públicas y privadas */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default RutasPrivadas;
