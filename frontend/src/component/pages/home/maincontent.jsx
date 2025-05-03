import React, { useState } from 'react';
import  TShirtCard  from "./TShirtCard";
import ProductDetail from '../ProductDetail/productDetail';
// import ProductDetail from "../ProductDetail/ProductDetail";

export const title = (headline) => {
  return (
    <>
      <div className="flex items-center my-8">
        <div className="flex-grow h-px bg-gray-200"></div>
        <h2 className="px-4 text-xl font-semibold text-gray-800 whitespace-nowrap">
          {headline}
        </h2>
        <div className="flex-grow h-px bg-gray-200"></div>
      </div>
    </>
  );
};

// Define products database
const products = {
  polos: [
    {
      id: 'polo1',
      title: "M & S T-Shirts",
      imageSrc: "/Image/Branded/T-shirt 1.webp",
      price: "1299",
      category: "polo"
    },
    {
      id: 'polo2',
      title: "T-Shirts",
      imageSrc: "/Image/Branded/T-shirt 2.webp",
      price: "1099",
      category: "polo"
    },
    {
      id: 'polo3',
      title: "T-Shirts",
      imageSrc: "/Image/Branded/T-shirt 3.webp",
      price: "999",
      category: "polo"
    },
    {
      id: 'polo4',
      title: "T-Shirts",
      imageSrc: "/Image/Polo/T-Shirt 2.webp",
      price: "1599",
      category: "polo"
    },
    {
      id: 'polo5',
      title: "T-Shirts",
      imageSrc: "/Image/Polo/T-Shirt 3.webp",
      price: "1299",
      category: "polo"
    }
  ],
  hoodies: [
    {
      id: 'hoodie1',
      title: "Hoodies",
      imageSrc: "/Image/Hoodeis/Hoodies1.webp",
      price: "2099",
      category: "hoodie"
    },
    {
      id: 'hoodie2',
      title: "Hoodies",
      imageSrc: "/Image/Hoodeis/Hoodies2.webp",
      price: "1999",
      category: "hoodie"
    },
    {
      id: 'hoodie3',
      title: "Hoodies",
      imageSrc: "/Image/Hoodeis/Hoodies3.webp",
      price: "2299",
      category: "hoodie"
    },
    {
      id: 'hoodie4',
      title: "Hoodies",
      imageSrc: "/Image/Hoodeis/Hoodies4.webp",
      price: "2099",
      category: "hoodie"
    }
  ]
};

const MainContent = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    // Scroll to top when viewing product detail
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  // If a product is selected, show the product detail page
  if (selectedProduct) {
    return (
      <main className="flex-1 md:ml-16 px-4 py-6 max-w-7xl mx-auto w-full">
        <div className="mb-4">
          <button 
            onClick={handleBackToProducts}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Products
          </button>
        </div>
        <ProductDetail product={selectedProduct} onClose={handleBackToProducts} />
      </main>
    );
  }

  // Otherwise, show the product list
  return (
    <main className="flex-1 md:ml-16 px-4 py-6 max-w-7xl mx-auto w-full">
      {/* Page Title */}
      <h1 className="text-3xl text-gray-800 text-center my-6">
        Personalized Custom T-Shirts & Shirts
      </h1>

      {/* Create Your Own Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl text-gray-800 mb-4">Create Your Own T-Shirts</h2>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Upload your own picture or image, add a funny or serious message, and make your own T-Shirt today!
        </p>
      </div>

      {title("Polo T-shirt")}

      {/* T-Shirt Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {products.polos.map((product) => (
          <TShirtCard
            key={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            price={product.price}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>

      {title("Hoodies")}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {products.hoodies.map((product) => (
          <TShirtCard
            key={product.id}
            title={product.title}
            imageSrc={product.imageSrc}
            price={product.price}
            onClick={() => handleProductClick(product)}
          />
        ))}
      </div>
    </main>
  );
};

export default MainContent;