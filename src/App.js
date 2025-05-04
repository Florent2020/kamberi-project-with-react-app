import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Navbar";
import Home from "./pages/HomePage";
import Career from "./pages/CareerPage";
import CareerDetail from "./pages/career/CareerDetails";
import AdminPage from "./pages/admin/AdminPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Error from "./pages/ErrorPage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="bg">
        <div className="wrapper">
          <Nav />
          <main>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career/position/:id" element={<CareerDetail />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
