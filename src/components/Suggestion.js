import { useState } from "react"

const Suggestion = ({ user: {username, profile_image} }) => {
  const [isFollowing,  setIsFollowing] = useState(false)

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div>
        <img src={profile_image} alt={username} />
        <div className="user-info">
            <h3>{username}</h3>
            <p>{Math.random() > 0.2 ? 'Segue você' : 'Novo no Instagram'}</p>
        </div>
        {isFollowing 
          ? <button onClick={handleClick} className="follow" style={{color: '#111'}}>Seguindo</button>
          : <button onClick={handleClick} className="follow">Seguir</button>
        }
    </div>
  )
}

export default Suggestion