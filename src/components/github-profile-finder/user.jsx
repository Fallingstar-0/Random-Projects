import React from "react"

const User = ({ user }) => {
  const {
    avatar_url,
    following,
    html_url,
    name,
    followers,
    public_repos,
    login,
    created_at,
  } = user

  const createdDate = new Date(created_at)
  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt={name} className="avatar" />
      </div>
      <div className="name-container">
        <a href={html_url}>{name || login}</a>
        <p>
          User joined on:{" "}
          {createdDate.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
      <div>
        <p>Public Repos: {public_repos}</p>
      </div>
      <div>
        <p>Following: {following}</p>
      </div>
      <div>
        <p>Followers: {followers}</p>
      </div>
    </div>
  )
}

export default User
