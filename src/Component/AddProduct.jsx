import React, { useState } from "react";
import "./style.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../FireBase/Firebase";

function AddProduct() {
  let AddDataProduct = {
    title: "",
    category: "",
    price: "",
    image: "",
    description: "",
  };

  let [assing, Setassing] = useState(AddDataProduct);

  function handleSubmit(e) {
    e.preventDefault();
    addDoc(collection(db, "data"), assing)
      .then((res) => {
        console.log("Document added with ID:", res.id);
        Setassing(AddDataProduct);
      })
      .catch((err) => {
        console.error("Error adding document:", err);
      });
  }

  const handleChange = (e) => {
    Setassing({ ...assing, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="form-container">
        <h1
          style={{
            textAlign: "center",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          AddData
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="image"
            placeholder="Image"
            value={assing.image}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid black",
              outline: "none",
            }}
          />{" "}
          <br></br>
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={assing.title}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid black",
              outline: "none",
            }}
          />
          <br></br>
          <select
            name="category"
            value={assing.category}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              backgroundColor: "#f8f9fa",
              border: "1px solid #ccc",
              borderRadius: "4px",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            <option value="">Select Category</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewellery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <input
            type="text"
            placeholder="Price"
            name="price"
            value={assing.price}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid black",
              outline: "none",
            }}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={assing.description}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid black",
              outline: "none",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "8px 20px",
              marginLeft: "35%",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
