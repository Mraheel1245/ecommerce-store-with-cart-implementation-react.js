import React from "react";
// Importing react router dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing pages
import Home from "./pages/Home";
import ProductDeatils from "./pages/ProductDetails";

// Importing Components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import { Provider } from "react-redux";
import { store } from "./redux/auth";

const App = () => {
  return (
    <Provider store={store}>
      <div className="overflow-hidden">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDeatils />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Sidebar />
          <Footer />
        </Router>
      </div>
    </Provider>
  );
};

export default App;
