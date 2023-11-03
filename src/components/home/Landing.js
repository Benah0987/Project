import React from 'react';

function Landing() {
  return (
    <div className="container">
      <div className="landing row">
        <div className="col d-flex justify-content-center align-items-center">
          <div>
            <h2>Welcome to Our Store</h2>
            <p>Discover a wide range of high-quality products carefully selected for you. Our collection includes everything from cutting-edge tech to timeless fashion pieces.</p>
            <button type="button" className="btn btn-danger rounded-5 px-4">Explore Products</button>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src='/homeimage.png' className='' alt='image loading...' />
        </div>
      </div>
    </div>
  );
}

export default Landing;
