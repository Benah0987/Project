import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
    const nav = useNavigate();
    const [products, setProducts] = useState([]);
    const [singleProduct, setSingleProduct] = useState();

    // Add Product
    const AddProduct = (data) => {
        fetch(`http://localhost:3400/products`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((res) => {
                console.log("Saved successfully", res);
                nav("/");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Product Saved Successfully`,
                    showConfirmButton: false,
                    timer: 3000
                });
            });
    }

    // Fetch Single Product
    const GetSingleProduct = (id) => {
        // Only fetch the single product if the id changes
        if (id) {
          fetch(`http://localhost:3400/products/${id}`)
            .then(res => res.json())
            .then(res => {
              setSingleProduct(res);
              console.log("Fetching from Context ", res);
            });
        }
        // No closing curly brace is needed here
      };

    // Delete Product
    const DeleteProduct = (id) => {
        fetch(`http://localhost:3400/products/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                console.log("Deleted successfully");
                nav("/");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Product ${id} deleted successfully`,
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    }

    // Fetch Products
    useEffect(() => {
        fetch("http://localhost:3400/products", {
            method: "GET"
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setProducts(res);
            });
    }, []);

    const contextData = {
        AddProduct,
        products,
        GetSingleProduct,
        singleProduct,
        DeleteProduct
    }

    return (
        <ProductContext.Provider value={contextData}>
            {children}
        </ProductContext.Provider>
    );
}
