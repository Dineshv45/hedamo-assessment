import products from "../../../data/products.json";
import "../../../../styles/productDetails.css";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

  return (
    <div className="details-container">
      {/* Top section */}
      <div className="details-top">
        <img
          src={product.image}
          alt={product.name}
          className="details-image"
        />
        <div className="details-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
          {/* 🔥 Buy Now Button */}
          <button className="buy-now">🔥 Buy Now</button>
        </div>
      </div>

      {/* Bottom cards */}
      <div className="details-cards">
        {/* ✅ Features instead of Specifications */}
        <div className="card">
          <h3>Features</h3>
          <ul>
            {product.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        {/* Nutrition card */}
        {product.nutrition && (
          <div className="card">
            <h3>Nutrition</h3>
            <ul>
              {Object.entries(product.nutrition).map(([key, value], index) => (
                <li key={index}>
                  <b>{key}:</b> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Traceability card */}
        {product.traceability && (
          <div className="card">
            <h3>Traceability</h3>
            <ul>
              {Object.entries(product.traceability).map(([key, value], index) => (
                <li key={index}>
                  <b>{key}:</b> {value}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Reviews card */}
        <div className="card">
          <h3>User Reviews</h3>
          {product.reviews?.map((review, index) => (
            <div key={index} className="review">
              <strong>{review.user}</strong>
              <p>{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
