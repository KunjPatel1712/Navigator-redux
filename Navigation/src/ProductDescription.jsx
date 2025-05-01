import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDescription = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load product");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  if (error) return <h2 style={{ textAlign: "center", marginTop: "50px", color: "red" }}>{error}</h2>;

  return product && (
    <div style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      margin: "40px auto",
      gap: "50px",
      maxWidth: "1000px",
      padding: "20px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      flexWrap: "wrap"
    }}>
      
      <div style={{
        flex: "1",
        textAlign: "center"
      }}>
        <img
          src={product.image}
          alt={product.title}
          style={{
            height: "350px",
            objectFit: "contain",
            borderRadius: "10px",
            background: "#f8f8f8",
            padding: "20px",
            width: "100%",
            maxWidth: "350px"
          }}
        />
      </div>

      <div style={{
        flex: "2",
        display: "flex",
        flexDirection: "column",
        gap: "15px"
      }}>
        <h2 style={{
          fontSize: "24px",
          margin: "0",
          color: "#333"
        }}>
          {product.title}
        </h2>

        <p style={{
          fontSize: "16px",
          color: "#666",
          lineHeight: "1.5"
        }}>
          {product.description}
        </p>

        <h3 style={{
          fontSize: "22px",
          color: "#e60023",
          margin: "10px 0"
        }}>
          ${product.price}
        </h3>

        <p style={{
          fontSize: "14px",
          color: "#888"
        }}>
          Category: {product.category}
        </p>

        <button style={{
          marginTop: "20px",
          padding: "12px 24px",
          backgroundColor: "#e60023",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease"
        }}>
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductDescription;
