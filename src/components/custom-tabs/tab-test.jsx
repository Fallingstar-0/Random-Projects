import React from "react"
import Tabs from "./tabs"

const RandomComponent = () => {
  return <div>Some random Content for Tab3</div>
}

const TabTest = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is some content for Tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent />,
    },
  ]

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex)
  }

  return <Tabs tabsContent={tabs} onChange={handleChange} />
}

export default TabTest
