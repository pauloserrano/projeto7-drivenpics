import { useState } from "react"
import Comment from "./Comment"

const users = [
    {user: '9gag', img: '/images/profiles/9gag.jpg'},
    {user: 'meowed', img: '/images/profiles/meowed.jpg'},
    {user: 'barked', img: '/images/profiles/barked.jpg'},
    {user: 'nathanwpylestrangeplanet', img: '/images/profiles/nathanwpylestrangeplanet.jpg'},
    {user: 'wawawiwacomicsa', img: '/images/profiles/wawawiwacomicsa.jpg'},
    {user: 'respondeai', img: '/images/profiles/respondeai.jpg'},
    {user: 'filomoderna', img: '/images/profiles/filomoderna.jpg'},
    {user: 'memeriagourmet', img: '/images/profiles/memeriagourmet.jpg'},
    {user: '9gag', img: '/images/profiles/9gag.jpg'},
    {user: 'meowed', img: '/images/profiles/meowed.jpg'},
]


const Comments = () => {
    const likedBy = users[Math.floor(Math.random() * 10)]

    const [comments, setComments] = useState([
        {
            user: likedBy.user, 
            profileImage: likedBy.img,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur quaerat neque placeat quis excepturi ipsa atque hic doloremque non?', 
            likes: '7'
        },
    ])
    
    const handlePublish = (btn) => {
        setComments((arr) => {
            return [
                ...arr,
                {
                    user: 'catarinacomics', 
                    profileImage: '/images/profiles/catanacomics.jpg',
                    text: btn.parentElement.querySelector('input').value,
                    likes: '0'
                }
            ]
        })
    }

  return (
    <div className="comments">
        <div className="user-comments-title">
            <div>Comentários</div>
        </div>
        {comments 
            ? comments.map(({ user, profileImage, text, likes}) => (
                <Comment user={user} img={profileImage} text={text} likes={likes} />
            ))
            : ''
        }
        <div className="user-comments-title see-all">
            <div>Ver todos</div>
        </div>
        <div className="new-comment">
            <img src="/images/profiles/catanacomics.jpg" alt="catanacomics" />
            <input type="text" placeholder="Add a comment..." />
            <button onClick={(e) => handlePublish(e.target)}>Publish</button>
        </div>
    </div>
  )
}

export default Comments