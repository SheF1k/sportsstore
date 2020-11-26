import React, { Component } from 'react'

export class ProductList extends Component {
  render() {
    const { products } = this.props

    if (products == null || !products.length) {
      return <h5 className="p2">No Products</h5>
    }

    return products.map((product) => (
      <div className="card m-1 p-1 bg-light" key={product.id}>
        <h4>
          {product.name}
          <span className="badge badge-pill badge-primary float-right">${product.price.toFixed(2)}</span>
        </h4>
        <div className="card-text bg-white p-1">{product.description} </div>
      </div>
    ))
  }
}
