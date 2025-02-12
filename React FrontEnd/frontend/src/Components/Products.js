


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Fetching products...');
    const token = sessionStorage.getItem('token'); 
    fetch('http://localhost:4444/user/product', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`
      }
    })
      .then(response => {
        console.log('Received response:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data.data);
        
        setProducts(data.data);
        setLoading(false);
      })
      .catch(error => {
        console.log('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    const token = sessionStorage.getItem('token'); 
    const userId = 1; 
    fetch('http://localhost:4444/user/place-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: JSON.stringify({ userId, productId: product.product_id }) 
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Product added to cart:', data);
        
        navigate('/cart', { state: { selectedProduct: product } });
      })
      .catch(error => {
        console.error('Error adding product to cart:', error);
      });
  };

  const handleBuyNow = (product) => {
    const token = sessionStorage.getItem('token'); 
    const userId = 3; 
    const orderDetails = {
        userId,
        total_amount: product.price,
        order_status: 'Pending',
        created_at: '2025-02-11T10:35:00+05:30'
    };

    console.log('Order Details:', orderDetails); 
debugger;
    fetch('http://localhost:4444/user/place-orderdetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(orderDetails)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Order placed:', data);
        const orderId = data.order_id; 
       
        navigate('/OrderDetails');
    })
    .catch(error => {
        console.error('Error placing order:', error);
    });
};



  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div style={{ backgroundImage: 'url(/images/image3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', width: '100%', color: 'white', marginTop: '10px' }}>
      <div className="container mt-5">
        <h1 className="text-center mb-4" style={{ color: 'white' }}>Product List</h1>
        <div className="row">
          {products.map(product => (
            
            <div className="col-md-4 mb-4" key={product.product_id}>
              <div className="card h-100">
                <img width={150} height={150} src={`http://localhost:4444/images/${product.images}`} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Description: {product.description}</p>
                  <p className="card-text">Price: ₹{product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                  <p className="card-text">Created At: {new Date(product.created_at).toLocaleDateString()}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    <button className="btn btn-success" onClick={() => handleBuyNow(product)}>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;