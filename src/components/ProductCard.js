"use client";
import Link from "next/link";
import "../styles/page.css";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <Link href={`/products/${product.id}`} className="btn">
        Know More
      </Link>
    </div>
  );
}
