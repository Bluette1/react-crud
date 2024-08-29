import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Product from '../interfaces/product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch('http://0.0.0.0:8000/api/products')
      const data = await response.json()
      setProducts(data)
    })()
  }, [])

  return (
    <Wrapper>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Products</h1>
      </div>
      <h2>Section title</h2>
      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: Product) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td><img src={p.image} height="180"/></td>
                <td>{p.title}</td>
                <td>{p.likes}</td>
                <td>text</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Products;

function effect(effect: any, arg1: () => () => void, deps: any, arg3: never[]) {
  throw new Error("Function not implemented.");
}


function deps(effect: any, arg1: () => () => void, deps: any, arg3: never[]) {
  throw new Error("Function not implemented.");
}
