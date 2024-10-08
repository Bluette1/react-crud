import React, { useState, useEffect } from 'react'
import Product from '../interfaces/product';

const Main = () => {
  const [products, setProducts] = useState([] as Product[])

  useEffect(() => {
    (async () => {
      const response = await fetch('http://0.0.0.0:8001/api/products')
      const data = await response.json()
      setProducts(data)
    })()

  }, [])

  const like = async (id: number) => {
    await fetch(`http://0.0.0.0:8001/api/products/${id}/like`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
    
    setProducts(products.map(p => {
      if(p.id === id) {
        p.likes++;
      }
      return p;
    }))

  }
  return (
    <main>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Album example</h1>
            <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" className="btn btn-primary my-2">Main call to action</a>
              <a href="#" className="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {products.map((p: Product) => (
              <div className="col" key={p.id}>
                <div className="card shadow-sm">
                  <img src={p.image} height="180" />
                  <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                  <div className="card-body">
                    <p className="card-text">{p.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button onClick={() => like(p.id)} type="button" className="btn btn-sm btn-outline-secondary">Like</button>
                      </div>
                      <small className="text-body-secondary">{p.likes} likes</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </main>
  )
}

export default Main;


