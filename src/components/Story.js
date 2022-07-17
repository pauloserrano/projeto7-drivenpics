const Story = ({ username, profile_image }) => {
  return (
    <div>
        <div className="gradient-border">
            <img src={profile_image} alt={username}/>
        </div>
        <p>{username}</p>
    </div>
  )
}

export default Story