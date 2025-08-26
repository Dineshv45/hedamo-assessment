import products from "../data/products.json";
import ProductCard from "../components/ProductCard";
import "../styles/page.css";
import HackerEffect from "../components/HackerEffect";

export default function Home() {
  return (
    <>
      <h2 id="line" data-value="OUR PRODUCTS" className="title">
        OUR PRODUCTS
      </h2>

      <HackerEffect />

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
