import React from "react";
import { Link } from "react-router-dom";

export default function CraftCard({ craft, crafts, setCraft }) {
  const { _id, title, description, price, image, category } = craft;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt={title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Description: {description}</p>
          <p>Price: {price}</p>
          <p>Category: {category}</p>
          <div className="card-actions justify-end">
            <Link to={`/update/${_id}`} className="text-blue-600 font-bold">Edit</Link>
            <button className="text-blue-600 font-bold">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
