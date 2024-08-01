import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Update() {
  const craft = useLoaderData();
  const { _id, title, description, price, image, category } = craft;

  const handleUpdate = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const category = e.target.category.value;
    const image = e.target.image.value;

    console.log(title, description, price, category, image);

    const updateCraft = { title, description, price, category, image };

    fetch(`http://localhost:3000/craft/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log("Successfully updated!");
          alert("Craft updated successfully!");
        }
      })
      .catch((error) => {
        console.error("Error updating craft:", error);
        alert("Failed to update craft.");
      });
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleUpdate}>
        <label className="input input-bordered flex items-center gap-2">
          Title:
          <input
            defaultValue={title}
            required
            type="text"
            name="title"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Description:
          <input
            defaultValue={description}
            required
            type="text"
            name="description"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Price:
          <input
            defaultValue={price}
            required
            type="text"
            name="price"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Category:
          <input
            defaultValue={category}
            required
            type="text"
            name="category"
            className="grow"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Image Link:
          <input
            defaultValue={image}
            required
            type="text"
            name="image"
            className="grow"
          />
        </label>
        <button className="btn btn-primary mt-6 w-full">Update</button>
      </form>
    </div>
  );
}
