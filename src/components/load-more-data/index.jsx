import React, { useEffect, useState } from "react"
import "./styles.css"

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [disableButton, setDisableButton] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      )
      const data = await response.json()

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products])
        setLoading(false)
      }
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [count])

  useEffect(() => {
    if (products && products.length === 100) setDisableButton(true)
  }, [products])
  if (loading) {
    return <div>Loading... please wait</div>
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => {
              return (
                <div className="product" key={index}>
                  <img key={item.id} src={item.thumbnail} alt={item.title} />
                </div>
              )
            })
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More Products
        </button>
        {disableButton ? <p>You have reached the 100 products</p> : null}
      </div>
    </div>
  )
}

export default LoadMoreData
