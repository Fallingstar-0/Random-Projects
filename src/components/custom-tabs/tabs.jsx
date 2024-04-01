import React, { useEffect, useState } from "react"
import "./tabs.css"

const Tabs = ({ tabsContent, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const handleOnClick = (index) => {
    setCurrentTabIndex(index)
    onChange(index)
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((item, index) => (
          <div
            key={item.label}
            onClick={() => handleOnClick(index)}
            className={
              currentTabIndex === index
                ? "tab-container active-tab bn27"
                : "tab-container"
            }
          >
            <span key={item.label}>{item.label}</span>
          </div>
        ))}
      </div>
      <div className="content active-content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  )
}

export default Tabs
