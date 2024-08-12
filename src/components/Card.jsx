import React from "react";

function Card({ title, thumbnail, price }) {
  return (
    <div className="w-[250px] h-[250px] mt-5 rounded-[20px] overflow-hidden shadow-lg border border-gray-300 p-4 flex flex-col items-center ">
      <div className="bg-white rounded-[20px] overflow-hidden shadow-md border border-gray-300 w-[200px] h-[200px] flex items-center justify-center relative ">
        <img
          className="w-full h-full object-cover "
          src={thumbnail}
          alt="Product"
        />
        <div className="absolute bottom-0 right-0 bg-gray-800 text-white text-sm px-2 py-1 m-2 rounded transform -rotate-12">
          ${price}
        </div>
      </div>
      <div className="mt-4 text-center ">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
}

export default Card;
