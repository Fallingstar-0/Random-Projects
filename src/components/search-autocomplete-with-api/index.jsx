import React, { useEffect, useState } from "react"
import Suggestions from "./suggestions"

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [filteredUsers, setFilteredUsers] = useState([])
  const [showDropDown, setShowDropDown] = useState(false)

  const fetchUsers = async () => {
    try {
      setLoading(true)
      const response = await fetch("https://dummyjson.com/users")
      const data = await response.json()

      if (data && data.users && data.users.length)
        setUsers(data.users.map((item) => item.firstName))
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }

  const handleOnChange = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchValue(query)
    if (query.length > 0) {
      setFilteredUsers(
        users.filter((item) => item.toLowerCase().startsWith(query))
      )
      setShowDropDown(true)
    } else {
      setShowDropDown(false)
    }
  }

  const handleClick = (e) => {
    setSearchValue(e.target.innerText)
    setShowDropDown(false)
    setFilteredUsers([])
  }

  console.log(users, filteredUsers)
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading! Please wait...</h1>
      ) : (
        <input
          type="text"
          value={searchValue}
          className="search-users"
          placeholder="Search users here..."
          onChange={(e) => handleOnChange(e)}
        />
      )}
      {showDropDown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  )
}

export default SearchAutoComplete
