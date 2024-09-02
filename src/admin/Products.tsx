import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Product from '../interfaces/product';
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('http://0.0.0.0:8000/api/products')
      const data = await response.json()
      setProducts(data)
    })()
  }, [])

  const del = async (id: number) => {
    await fetch(`http://0.0.0.0:8000/api/products/${id}`, { method: 'DELETE' });
    window.confirm('Are you sure you want to delete this product?')
    setProducts(products.filter((product: Product) => product.id !== id))
  }

  return (
    <Wrapper>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Products</h1>
      </div>
      <div className="pb-3 pt-2 mb-3 border-bottom"><div className="btn-toolbar mb-2 mb-md-0">
        <Link to={'/admin/products/create'} className="btn btn-sm btn-outline-secondary">Add</Link>
      </div></div>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Likes</th>
              <th scope="col">Action</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: Product) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td><img alt="" src={p.image} height="180" /></td>
                <td>{p.title}</td>
                <td>{p.likes}</td>
                <td>
                  <div className="btn-group mr-2">
                  <Link to={`/admin/products/${p.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                    <button onClick={() => del(p.id)} className="btn btn-sm btn-outline-secondary">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Products;

