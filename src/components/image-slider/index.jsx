import React, { useState, useEffect } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import styles from "./index.module.css"

const ImageSlider = ({ url, page = 1, limit = 5 }) => {
  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchImages = async (getUrl) => {
    try {
      setLoading(true)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if (data) {
        setImages(data)
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false)
    }
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }
  useEffect(() => {
    if (url !== "") fetchImages(url)
  }, [url])

  if (loading) {
    return <div>Loading... Please wait!</div>
  }

  if (errorMsg !== null) {
    return <div>Error Occurred! {errorMsg}</div>
  }

  return (
    <div className={styles.container}>
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className={`${styles.arrow} ${styles.arrowLeft}`}
      />
      {images && images.length > 0
        ? images.map((img, index) => (
            <img
              key={img.id}
              src={img.download_url}
              alt={img.download_url}
              className={
                currentSlide === index
                  ? `${styles.currentImage}`
                  : `${styles.currentImage} ${styles.hideCurrentImage}`
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className={`${styles.arrow} ${styles.arrowRight}`}
      />
      <span className={styles.circleIndicators}>
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? `${styles.currentIndicator}`
                    : `${styles.currentIndicator} ${styles.inactiveIndicator}`
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  )
}

export default ImageSlider
