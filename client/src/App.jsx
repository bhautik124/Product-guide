// import React, { useState, useEffect } from "react";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./component/Home";
// import Product from "./component/Product";
// import ProductDetails from "./component/ProductDetails";
// import axios from "axios";

// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await axios.get(
//           "https://mocki.io/v1/d8eabc9f-8481-4712-97e6-b3db74d9b853"
//         );
//         console.log("API Response:", response.data);

//         if (response.status === 200 && response.data.products) {
//           setProducts(response.data.products);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, []);

//   return (
//     <div className="w-full min-h-screen bg-black">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product" element={<Product />} />
//         <Route
//           path="/product/:productId"
//           element={<ProductDetails products={products} />} // Pass products to ProductDetails
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductDetails from "./component/ProductDetails";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/d8eabc9f-8481-4712-97e6-b3db74d9b853"
        );
  
        if (response.status === 200 && response.data.products) {
          // Modify images to use local path
          const updatedProducts = response.data.products.map((product) => ({
            ...product,
            img: `/images/${product.name.replace(/\s+/g, "_")}.jpeg`, // Replace spaces with _
          }));
  
          // Update the state with the modified products
          setProducts(updatedProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="w-full min-h-screen bg-black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:productId"
          element={<ProductDetails products={products} />} // Pass products to ProductDetails
        />
      </Routes>
    </div>
  );
};

export default App;