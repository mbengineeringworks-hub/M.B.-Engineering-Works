import ProductsNav from "../pages/products/ProductsNav";
import { useNavigate } from "react-router-dom";

const products = [
  "BOPP Tape Slitting Machine",
  "Tape Rewinding Machine",
  "Adhesive Tape Machine",
  "Masking Tape Machine"
];

export default function Products() {
   const navigate = useNavigate();

  const handleView = () => {
    navigate("/products");
  };
  return (
    <section className="container py-5">

      <h2 className="text-center mb-5 fw-bold">
        Our Products
      </h2>

      <div className="row">

        {products.map((item, index) => (

          <div
            className="col-md-3"
            key={index}
            data-aos="zoom-in"
          >

            <div className="card product-card shadow">

              <div className="card-body text-center">

                <h5>{item}</h5>

                <button className="btn btn-primary mt-3" onClick={handleView}>
                  View
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}