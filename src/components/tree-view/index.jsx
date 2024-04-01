import React from "react"
import MenuList from "./menu-list"
import styles from "./index.module.css"

const TreeView = ({ menus }) => {
  return (
    <div className={styles.treeViewContainer}>
      <MenuList list={menus} />
    </div>
  )
}

export default TreeView
