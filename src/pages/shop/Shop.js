import React, { Component } from "react"

import SHOP_DATA from "./shop.data"

import CollectionPreview from "../../components/collection-preview/CollectionPreview"

class Shop extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collection: SHOP_DATA,
    }
  }

  render() {
    const { collection } = this.state

    return (
      <div>
        {collection.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    )
  }
}

export default Shop
