import React, { useState } from "react"
import MenuListTest from "./menu-list"
import { FaMinus, FaPlus } from "react-icons/fa"

const MenuItemTest = ({ items }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  const handleToggleChildren = (getCurrentIndex) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentIndex]: !displayCurrentChildren[getCurrentIndex],
    })
  }
  return (
    <li>
      <div className="menu-item">
        <h1>{items.label}</h1>
        {items && items.children && items.children.length ? (
          <span onClick={() => handleToggleChildren(items.label)}>
            {items &&
            items.children &&
            items.children.length &&
            displayCurrentChildren[items.label] ? (
              <FaMinus size={25} />
            ) : (
              <FaPlus size={25} />
            )}
          </span>
        ) : null}
      </div>
      <div>
        {items &&
        items.children &&
        items.children.length &&
        displayCurrentChildren[items.label] ? (
          <MenuListTest list={items.children} />
        ) : null}
      </div>
    </li>
  )
}

export default MenuItemTest
