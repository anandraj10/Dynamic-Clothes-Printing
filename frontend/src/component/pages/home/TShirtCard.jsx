import React from 'react';

const TShirtCard = ({ title, imageSrc, price, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative pb-[125%]">
        <img 
          src={imageSrc} 
          alt={title} 
          className="absolute w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <div className="flex items-center mt-1">
          <span className="text-lg font-semibold text-gray-900">₹{price}</span>
          <span className="ml-2 text-sm text-gray-500 line-through">₹{Math.round(price * 1.2)}</span>
          <span className="ml-1 text-xs text-green-600">20% off</span>
        </div>
      </div>
    </div>
  );
};

export default TShirtCard;