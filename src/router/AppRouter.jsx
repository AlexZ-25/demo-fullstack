import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container pt-5">
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default AppRouter;
