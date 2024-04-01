import React from "react"
import MenuItem from "./menu-item"

const MenuList = ({ list }) => {
  return (
    <ul>
      {list && list.length ? (
        list.map((listItem) => <MenuItem item={listItem} />)
      ) : (
        <div>Error.</div>
      )}
    </ul>
  )
}

export default MenuList
