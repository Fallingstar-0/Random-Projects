import React, { useEffect, useState } from "react"
import data from "./data"
import "./styles.css"

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelect, setEnableMultiSelect] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelect = (id) => {
    setSelected(selected === id ? null : id)
  }

  const handleMultiSelect = (id) => {
    const updatedMultiple = [...multiple]

    // if it doesn't include the (id) then push it to the updatedMultiple
    if (!updatedMultiple.includes(id)) {
      updatedMultiple.push(id)
      setMultiple(updatedMultiple)
      return
    } else {
      // if it doesn't then create a new array called filterMultiple, then add to the filterMultiple array all elements except the elements with id's that do not match the id at hand
      const filteredMultiple = updatedMultiple.filter(
        (selectedId) => selectedId !== id
      )
      setMultiple(filteredMultiple)
      return
    }
  }
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>
        Enable Multi-Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div
              onClick={
                enableMultiSelect
                  ? () => handleMultiSelect(item.id)
                  : () => handleSingleSelect(item.id)
              }
              className="item"
            >
              <div className="title">
                <h3>{item.question}</h3>
                <span>
                  {(enableMultiSelect && multiple.includes(item.id)) ||
                  (!enableMultiSelect && selected === item.id)
                    ? "-"
                    : "+"}
                </span>
              </div>
              {enableMultiSelect
                ? multiple.includes(item.id) && (
                    <div className="content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="content">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  )
}

export default Accordion
