import React, { useState } from "react"
import QRCode from "react-qr-code"

const QrCodeGenerator = () => {
  const [input, setInput] = useState("")
  const [qrCode, setQrCode] = useState("")

  const handleQrCodeGenerate = () => {
    setQrCode(input)
    setInput("")
  }
  return (
    <div>
      <h1>Qr Code Generator</h1>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="qr-code"
        placeholder="Enter your value here"
        value={input}
      />
      <button onClick={handleQrCodeGenerate}>Generate</button>
      <div>
        <QRCode id="qr-code" value={qrCode} size={300} />
      </div>
    </div>
  )
}

export default QrCodeGenerator
