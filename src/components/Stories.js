import Story from "./Story"

const Stories = () => {
    const stories = [
        {username: '9gag', profile_image: '/images/profiles/9gag.jpg'},
        {username: 'meowed', profile_image: '/images/profiles/meowed.jpg'},
        {username: 'barked', profile_image: '/images/profiles/barked.jpg'},
        {username: 'nathanwpylestrangeplanet', profile_image: '/images/profiles/nathanwpylestrangeplanet.jpg'},
        {username: 'wawawiwacomicsa', profile_image: '/images/profiles/wawawiwacomicsa.jpg'},
        {username: 'respondeai', profile_image: '/images/profiles/respondeai.jpg'},
        {username: 'filomoderna', profile_image: '/images/profiles/filomoderna.jpg'},
        {username: 'memeriagourmet', profile_image: '/images/profiles/memeriagourmet.jpg'}
    ]

  return (
    <div className="stories-container">
        {stories.length > 0 
            ? stories.map(({ username, profile_image }, id) => (<Story key={id} username={username} profile_image={profile_image} />))
            : ''
        }
        <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>
  )
}

export default Stories