import { useRouter } from 'next/router'
import React from 'react'

const ProductItem = () => {
  const {
    query: { productId },
  } = useRouter()

  return <div>Esta es la página del producto {productId}</div>
}

export default ProductItem
