import React from "react"
import MenuListTest from "./menu-list"

const TreeViewTest = ({ menus }) => {
  return (
    <div className="tree-view-container">
      <MenuListTest list={menus} />
    </div>
  )
}

export default TreeViewTest
