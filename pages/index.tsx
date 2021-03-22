import React, { useEffect, useState } from 'react'

const Home: React.FC = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <h1>Hola Platzi!</h1>
      {productList.map((product) => {
        return <div>{product.image}</div>
      })}
    </div>
  )
}

export default Home
