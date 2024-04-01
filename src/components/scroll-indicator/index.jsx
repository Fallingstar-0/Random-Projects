import React, { useEffect, useState } from "react"
import "./styles.css"

const ScrollIndicator = ({ url }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const fetchData = async (getUrl) => {
    try {
      setLoading(true)
      const response = await fetch(getUrl)
      const data = await response.json()

      if (data.products && data.products.length > 0) {
        setProducts(data.products)
      }
      setLoading(false)
    } catch (error) {
      setErrorMsg(error.message)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  const handleScrollPercentage = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = document.documentElement.scrollTop

    const scrolledPercentage = (scrolled / height) * 100
    setScrollPercentage(scrolledPercentage)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage)
    return () => {
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  if (errorMsg) {
    return <div>Error: {errorMsg}</div>
  }
  if (loading) {
    return <div>Loading! Please wait...</div>
  }
  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll indicator</h1>
        <div className="scroll-track-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {products && products.length > 0
          ? products.map((product) => <p>{product.title}</p>)
          : null}
      </div>
    </div>
  )
}

export default ScrollIndicator
