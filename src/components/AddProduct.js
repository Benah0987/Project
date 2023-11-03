import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ProductContext } from '../context/ProductContext';

export default function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const { products, AddProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProductId = products.length + 1; // Generate new ID based on the current length of products array
    const newProduct = {
      id: newProductId,
      name: name,
      description: description,
      image: image,
      category: category,
      price: parseFloat(price),
      quantity: parseInt(quantity)
    };

    // Add the new product
    AddProduct(newProduct);

    // Redirect to the home page after adding the product
    navigate('/');
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Product added successfully!',
      showConfirmButton: false,
      timer: 3000
    });
  };

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col'>
          <h3>Add Product</h3>
          <form onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label className='form-label'>Category</label>
              <input type='text' onChange={(e) => setCategory(e.target.value)} className='form-control' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Name</label>
              <input type='text' onChange={(e) => setName(e.target.value)} className='form-control' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Image</label>
              <input type='text' onChange={(e) => setImage(e.target.value)} className='form-control' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Price</label>
              <input type='number' onChange={(e) => setPrice(e.target.value)} className='form-control' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Quantity</label>
              <input type='number' onChange={(e) => setQuantity(e.target.value)} className='form-control' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Description</label>
              <input type='text' onChange={(e) => setDescription(e.target.value)} className='form-control' />
            </div>

            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
}
