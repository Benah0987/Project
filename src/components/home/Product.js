import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';

function Product() {
  const { products } = useContext(ProductContext); // Assuming you have 'products' in your ProductContext

  return (
    <div className='container my-5'>
      <div className='text-center'>
        <h2 className='fw-bold'>Products</h2>
        <p>Explore our products</p>
      </div>

      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="col-4 mb-3">
              <div className='border bg-light overflow-hidden' style={{ width: '300px', height: '580px' }}>
                <img src={product.image} className='img-fluid' alt='Product Image' style={{ width: '100%', height: '60%' }} />
                <div style={{ padding: '15px' }}>
                  <h5>{product.name}</h5>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  <p>Available Quantity: {product.quantity}</p>

                  
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link to={`products/${product.id}`} className="btn btn-primary w-40">
                      View Details
                    </Link>
                 </div>
                
              </div>
            </div>
          ))
        ) : (
          <p>No products available at the moment</p>
        )}
      </div>
    </div>
  );
}

export default Product;
