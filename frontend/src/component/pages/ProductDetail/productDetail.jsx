import React, { useState } from 'react';

// Sample product data - in a real app, this would come from your API or database
const productsData = {
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


// SimilarProduct component to display a single similar product card
const SimilarProduct = ({ product, onClick }) => {
    return (
        <div
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onClick(product)}
        >
            <div className="h-48 bg-gray-100">
                <img
                    src={product.imageSrc}
                    alt={product.title}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="font-medium mb-1 truncate">{product.title}</h3>
                <div className="flex items-center">
                    <span className="text-red-600 font-semibold">₹{product.price}</span>
                    <span className="ml-2 text-gray-500 line-through text-sm">₹{Math.round(product.price * 1.2)}</span>
                    <span className="ml-2 text-green-600 text-xs">(20% off)</span>
                </div>
            </div>
        </div>
    );
};

const ProductDetail = ({ product, onClose }) => {
    // If no product is provided, use the first polo as default
    const defaultProduct = productsData.polos[0];
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('M');
    const [selectedColor, setSelectedColor] = useState('Black');
    const [currentProduct, setCurrentProduct] = useState(product || defaultProduct);

    // Mock data for the product details based on the image you provided
    const productDetails = {
        material: '200GSM Cotton',
        printType: 'Digital Printing & Embroidery',
        colors: ['White', 'Black', 'Navy Blue', 'Grey Melange', 'Dark Green'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        minOrder: 1
    };

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
        }
    };

    // Handler for similar product click
    const handleSimilarProductClick = (selectedProduct) => {
        setCurrentProduct(selectedProduct);
        // Reset other state values for the new product
        setQuantity(1);
        setSelectedSize('M');
        setSelectedColor('Black');
        // Scroll to top when changing products
        window.scrollTo(0, 0);
    };

    // Get similar products based on the current product category
    const getSimilarProducts = () => {
        // Determine the category of the current product
        const category = currentProduct.category;

        // Get all products of the same category
        const categoryProducts = category === 'polo' ? productsData.polos : productsData.hoodies;

        // Filter out the current product from similar products list
        return categoryProducts.filter(p => p.id !== currentProduct.id);
    };

    // Get similar products
    const similarProducts = getSimilarProducts();

    // Get 4 products at most
    const displayProducts = similarProducts.slice(0, 4);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Product Detail Section */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* Left Section - Product Images */}
                <div className="md:w-1/2">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                        <img
                            src={currentProduct.imageSrc}
                            alt={currentProduct.title}
                            className="w-full h-auto object-contain"
                            style={{ maxHeight: '500px' }}
                        />
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className="border border-gray-200 rounded cursor-pointer hover:border-blue-500">
                                <img
                                    src={currentProduct.imageSrc}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Product Info */}
                <div className="md:w-1/2">
                    <h1 className="text-2xl font-bold mb-2">{currentProduct.title}</h1>
                    <div className="flex items-center mb-4">
                        <span className="text-xl font-semibold text-red-600">₹{currentProduct.price}</span>
                        <span className="ml-2 text-gray-500 line-through">₹{Math.round(currentProduct.price * 1.2)}</span>
                        <span className="ml-2 text-green-600 text-sm">(20% off)</span>
                    </div>

                    <div className="mb-6">
                        <p className="text-gray-700 mb-4">
                            {currentProduct.category === 'polo' ?
                                'Cotton Polos are perfect for a business meeting, a daily work ensemble, special events, or enjoying a casual day out.' :
                                'Hoodies are perfect for casual outings, staying warm in style, and creating a comfortable everyday look.'}
                        </p>
                        <p className="text-gray-700 mb-4">
                            Ideal for: Corporate meeting, staff uniforms, and event giveaways offering
                            versatility and style in corporate settings.
                        </p>

                        <ul className="list-disc pl-5 mb-4 text-gray-700">
                            <li>Material: {productDetails.material}</li>
                            <li>Print Type: {productDetails.printType}</li>
                            <li>Available Colors: {productDetails.colors.join(', ')}</li>
                            <li>Product Sizes: {productDetails.sizes.join(', ')} (Size chart can be accessed in the next stage after customizing your design)</li>
                            <li>Order from as low as {productDetails.minOrder} Unit</li>
                        </ul>
                    </div>

                    {/* Color Selection */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Fabric Color</h3>
                        <div className="flex flex-wrap gap-2">
                            {productDetails.colors.map(color => (
                                <button
                                    key={color}
                                    className={`px-3 py-1 border rounded-md ${selectedColor === color ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                                    onClick={() => setSelectedColor(color)}
                                >
                                    {color}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Size Selection */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {productDetails.sizes.map(size => (
                                <button
                                    key={size}
                                    className={`w-10 h-10 flex items-center justify-center border rounded-md ${selectedSize === size ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Print Options */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Print Type</h3>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option>Full Colour Print (DTG)</option>
                            <option>Screen Printing</option>
                            <option>Embroidery</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Print Location</h3>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-1 border border-blue-500 bg-blue-50 rounded-md">Front</button>
                            <button className="px-3 py-1 border border-gray-300 rounded-md">Back</button>
                            <button className="px-3 py-1 border border-gray-300 rounded-md">Left Sleeve</button>
                            <button className="px-3 py-1 border border-gray-300 rounded-md">Right Sleeve</button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Front Print Size</h3>
                        <select className="w-full p-2 border border-gray-300 rounded-md">
                            <option>3x3 in</option>
                            <option>4x4 in</option>
                            <option>5x5 in</option>
                            <option>6x6 in</option>
                        </select>
                    </div>

                    {/* Quantity */}
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Quantity</h3>
                        <div className="flex items-center">
                            <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={handleQuantityChange}
                                className="w-20 p-2 border border-gray-300 rounded-md"
                            />
                            <p className="ml-4 text-sm text-gray-600">
                                Choose a quantity between 1-2000 for instant ordering. For higher quantities, you'll be directed to request quotations from Sales Team.
                            </p>
                        </div>
                    </div>

                    {/* Price Summary */}
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-semibold">₹{currentProduct.price * quantity}</span>
                            <span className="text-gray-600">inclusive of all taxes</span>
                        </div>
                        <div className="text-sm text-gray-600">
                            for {quantity} Qty (₹{currentProduct.price}/piece)
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                        <button
                            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md flex items-center justify-center gap-2"
                            onClick={() => alert('Upload your Files clicked')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                            Upload your Files
                        </button>
                        <button
                            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-md flex items-center justify-center gap-2"
                            onClick={() => alert('Create your Design clicked')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                            Create your Design
                        </button>
                    </div>

                    {/* Additional Actions */}
                    <div className="flex justify-between mt-4">
                        <button
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md mr-2"
                            onClick={() => alert('Add to Cart clicked')}
                        >
                            Add to Cart
                        </button>
                        <button
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md ml-2"
                            onClick={() => alert('Buy Now clicked')}
                        >
                            Buy Now
                        </button>
                    </div>

                    {/* Estimate Delivery */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Estimate Delivery</h3>
                        <div className="flex">
                            <input
                                type="text"
                                placeholder="Pincode"
                                className="flex-1 p-2 border border-gray-300 rounded-md"
                            />
                            <button className="ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md">
                                Check
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="mt-16 mb-8">
                <h2 className="text-2xl font-bold mb-6 border-b pb-2">Similar Products</h2>
                {displayProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {displayProducts.map(product => (
                            <SimilarProduct
                                key={product.id}
                                product={product}
                                onClick={handleSimilarProductClick}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No similar products available.</p>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;