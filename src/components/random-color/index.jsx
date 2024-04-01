import React, { useEffect, useState } from "react"
import "./styles.css"

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex")
  const [color, setColor] = useState("#000")

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length)
  }
  const handleCreateRandomHexColor = () => {
    // #000
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    let hexColor = "#"

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
    console.log(color)
  }

  const handleCreateRandomRgbColor = () => {
    //rgb(45,25,23)
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
  }
  const handleCreateRgbColor = () => {
    setTypeOfColor("rgb")
  }
  const handleCreateHexColor = () => {
    setTypeOfColor("hex")
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor()
    else handleCreateRandomHexColor()
  }, [typeOfColor])
  return (
    <div className="container" style={{ background: color }}>
      <div className="buttons">
        <button onClick={handleCreateHexColor}>Create Hex Color</button>
        <button onClick={handleCreateRgbColor}>Create RGB Color</button>
        <button
          onClick={
            typeOfColor === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Create Random Color
        </button>
      </div>
      <div className="content-display">
        <h1>{typeOfColor === "rgb" ? "RGB Color: " : "Hex Color: "}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColor
