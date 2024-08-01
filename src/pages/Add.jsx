import React from "react";

export default function Add() {
  const handleAdd = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const image = e.target.image.value;

    console.log(title, description, price, category, image);

    const newCraft = { title, description, price, category, image };

    fetch("https://artisculptix-server.vercel.app/craft", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newCraft)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Successfully added!");
        alert("Craft added successfully!");
      })
      .catch(error => {
        console.error("Error adding craft:", error);
        alert("Failed to add craft.");
      });
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleAdd}>
        <label className="input input-bordered flex items-center gap-2">
          Title:
          <input required type="text" name="title" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Description:
          <input required type="text" name="description" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Price:
          <input required type="text" name="price" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Category:
          <input required type="text" name="category" className="grow" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Image Link:
          <input required type="text" name="image" className="grow" />
        </label>
        <button className="btn btn-primary mt-6 w-full">Add</button>
      </form>
    </div>
  );
}
