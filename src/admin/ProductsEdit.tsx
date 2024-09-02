import React, { PropsWithRef, SyntheticEvent, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Wrapper from "./Wrapper";

const ProductsEdit = (props: PropsWithRef<any>) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://0.0.0.0:8000/api/products/${id}`)
      const product = await response.json()
      setTitle(product.title)
      setImage(product.image)
    })()
  }, [])

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch(`http://0.0.0.0:8000/api/products/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, image }),
      }
    );
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
            defaultValue={title}
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
            defaultValue={image}
          />
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsEdit;
