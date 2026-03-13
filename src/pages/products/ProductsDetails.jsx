import { useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function ProductsDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const dummyImg = "https://picsum.photos/900/500";

  const lorem = "Lorem ipsum dolor sit amet consectetur adipiscing elit ".repeat(80);

  return (
    <div className="container py-5">

      {/* Back Button */}
        <div>
            <button
        className="btn btn-outline-primary mb-4"
        onClick={() => navigate(-1)}>
        <FaArrowLeft className="me-2"/>
        Back
      </button>
        </div>
      

      <img
        src={dummyImg}
        className="img-fluid rounded mb-4"
        alt="product"
      />

      <h2 className="fw-bolder mb-3">
        Product {id}
      </h2>

      <p style={{ lineHeight: "1.8" }}>
        {lorem}
      </p>

    </div>
  );
}