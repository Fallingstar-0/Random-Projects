import React from "react"
import MenuItem from "./menu-item"

const MenuList = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length > 0
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  )
}

export default MenuList
