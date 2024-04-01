import React from "react"
import MenuItemTest from "./menu-item"

const MenuListTest = ({ list }) => {
  return (
    <ul>
      {list && list.length
        ? list.map((item) => <MenuItemTest items={item} />)
        : null}
    </ul>
  )
}

export default MenuListTest
