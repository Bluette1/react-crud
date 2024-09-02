import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import Wrapper from "./Wrapper";

const ProductsCreate = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch(`http://0.0.0.0:8000/api/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, image }),
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/admin/products" />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            type="text"
            name="title"
            id="title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            className="form-control"
            type="text"
            name="image"
            id="image"
          />
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsCreate;
