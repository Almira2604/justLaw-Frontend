import Navbar from "./Componenets/Navbar component/Navbar";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./Componenets/About component/About";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./Componenets/Footer component/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main className="pt-8 mx-auto px-6 sm:px-10 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          {/* Dynamic route with :id */}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;