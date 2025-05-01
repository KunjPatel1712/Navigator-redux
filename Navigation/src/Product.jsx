import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 
    const fetchProduct = () => {
        setLoading(true);
        setError(null);
        axios.get("https://fakestoreapi.com/products")
            .then((response) => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("Something went wrong");
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return loading ? (
        <h1>Loading...</h1>
    ) : error ? (
        <h1>{error}</h1>
    ) : (
        <div className="container">
            <div className="row row-cols-md-3 row-cols-1 g-4">
                {product.map((el) => (
                    <div key={el.id} className="col"  onClick={() => navigate(`/product/${el.id}`)} 
                    style={{ cursor: "pointer" }}>
                        <Card>
                            <Card.Img variant="top" src={el.image} height={350} />
                            <Card.Body>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Text>{el.description}</Card.Text>
                                <h5>${el.price}</h5>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
