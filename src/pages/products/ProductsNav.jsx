import { useNavigate } from "react-router-dom";
import "./ProductsNav.css";

import { useState } from "react";

export default function Products() {
    const navigate = useNavigate();
  const dummyImg = "https://picsum.photos/600/400";

  const categories = [
    "All",
    "BOPP Tape Slitting Machine",
    "PVC Insulation Tape Machine",
    "Thermal Paper Machine",
    "Dining Paper Machine",
    "Notebook Cover Machine",
    "Kraft Paper Machine",
    "Stretch Film Machine",
    "Cracker Paper Machine",
  ];

 const productData = [
  {
    id: 1,
    name: "288 BOPP Tape Slitting Machine",
    category: "BOPP Tape Slitting Machine",
  },
  {
    id: 2,
    name: "432 BOPP Tape Slitting Machine",
    category: "BOPP Tape Slitting Machine",
  },
  {
    id: 3,
    name: "Core Tube Cutter Machine",
    category: "BOPP Tape Slitting Machine",
  },
  {
    id: 4,
    name: "PVC Insulation Tape Slicing Machine",
    category: "PVC Insulation Tape Machine",
  },
  {
    id: 5,
    name: "Thermal Paper Roll Slitting Machine",
    category: "Thermal Paper Machine",
  },
  {
    id: 6,
    name: "Dining Paper Roll Printing Machine",
    category: "Dining Paper Machine",
  },
  {
    id: 7,
    name: "Notebook Cover Rewinding Machine",
    category: "Notebook Cover Machine",
  },
  {
    id: 8,
    name: "Kraft Paper Rewinding Machine",
    category: "Kraft Paper Machine",
  },
  {
    id: 9,
    name: "Stretch Film Roll Slitting Machine",
    category: "Stretch Film Machine",
  },
  {
    id: 10,
    name: "Cracker Paper Roll Slitting Machine",
    category: "Cracker Paper Machine",
  },
];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productData
      : productData.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          {/* SIDEBAR */}
          <div className="col-md-3">
            <div className="card p-3 shadow-sm">
              <h5 className="fw-bold mb-3">Categories</h5>
              <ul className="list-group">
                {categories.map((cat, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${
                      selectedCategory === cat ? "active" : ""
                    }`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PRODUCTS */}

          <div className="col-md-9">
            <div className="row g-4">
              {filteredProducts.map((product, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card shadow-sm product-card">
                    <img
                      src={dummyImg}
                      className="card-img-top"
                      alt="product"
                    />

                    <div className="card-body text-center">
                      <p className="card-text">{product.name}</p>
                      <button className="btn btn-warning text-white fw-bold buttonClr"
                       onClick={() => navigate(`/product/${product.id}`)} >
                            READ MORE
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
