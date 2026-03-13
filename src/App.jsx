import { useEffect } from "react";
import AOS from "aos";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactForm from "./pages/contact/ContactForm";
import Customers from "./pages/about/customers";
import "./App.css";
import AboutDDLayout from "./pages/about/AboutDDLayout";
import Team from "./pages/about/Team";
import Projects from "./pages/about/Projects";
import Faq from "./pages/about/Faq";
import ProductsNav from "./pages/products/ProductsNav";
import NotFound from "./pages/Notfound";
import ProductsDetails from "./pages/products/ProductsDetails";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="sticky-top-wrapper">
      <Header />
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutDDLayout />}>
          <Route path="team" element={<Team />} />
          <Route path="customers" element={<Customers />} />
          <Route path="projects" element={<Projects />} />
          <Route path="faq" element={<Faq />} />
        </Route>
        <Route path="/products" element={<ProductsNav />} />

        <Route path="/product/:id" element={<ProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
