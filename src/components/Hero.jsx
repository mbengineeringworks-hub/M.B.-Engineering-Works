import { useNavigate } from "react-router-dom";
import "./Hero.css"

export default function Hero() {
  const navigate = useNavigate();

  const handleView = () => {
    navigate("/products");
  };

  return (
    <section className="hero hero-bg">

      <div data-aos="fade-up">

        <h1 className="display-4 fw-bold">
          Tape Making Machines
        </h1>

        <p className="lead">
          Leading Manufacturer of Adhesive Tape Machinery
        </p>

        <button className="btn btn-light btn-lg mt-3" onClick={handleView}>
          View Products
        </button>

      </div>

    </section>
  );
}