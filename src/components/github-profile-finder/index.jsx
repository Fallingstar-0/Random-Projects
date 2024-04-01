import React, { useEffect, useState } from "react"
import User from "./user"
import "./styles.css"

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("Fallingstar-0")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const handleSubmit = () => {
    fetchData()
    setUserName("")
  }

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${userName}`)
      const data = await response.json()
      console.log(data)
      try {
        if (data) setUserData(data)
        setLoading(false)
      } catch (error) {
        setErrorMsg(error.message)
        setLoading(false)
      }
    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading! Please wait...</div>
  }

  if (errorMsg) {
    return <div>Error! {errorMsg}</div>
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  )
}

export default GithubProfileFinder
