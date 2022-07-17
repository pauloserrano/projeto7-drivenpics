import { useState } from "react"

const Post = ({ photo }) => {
    const { description, user, urls } = photo

    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(`${photo.likes}`.replaceAll('.', ''))


    const handleLike = () => {
        setIsLiked(!isLiked)
        !isLiked 
            ? setLikes(`${Number(likes) + 1}`) 
            : setLikes(`${Number(likes) - 1}`)
    }

    const formatLike = (num) => {
        let formattedNum = []

        for (let i = num.length; i > 0;  i -= 3){
            const start = (i - 3 > 0) ? i - 3 : 0

            formattedNum.unshift(num.slice(start, i))
            console.log({formattedNum, i})
        }

        return formattedNum.join('.')
    }

  return (
    <div>
        <div className="header">
            <img src={user.profile_image.large} alt={user.username} />
            <p>{user.username}</p>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
        <img className="post-img" onDoubleClick={handleLike} src={urls.regular} alt={user.username} />
        <div className="footer">
            <div className="footer-icons">
                {isLiked 
                    ? <ion-icon name="heart" onClick={handleLike}></ion-icon>
                    : <ion-icon name="heart-outline" onClick={handleLike}></ion-icon>
                }
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <p>{description ? description : 'Lorem ipsum dolor sit amet'}</p>
            <div className="footer-data">
                <img src={user.profile_image.large} alt={user.username} />
                <p>Curtido por <strong>{user.username}</strong> e <strong>outras {formatLike(likes)} pessoas</strong></p>
            </div>
            <div className="comments">
                <div className="user-comments-title">
                    <div>Comentários</div>
                </div>
                <div>
                    <img src="/images/profiles/badvibesmemes.jpg" alt="badvibesmemes" />
                    <div className="user-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur quaerat neque placeat quis excepturi ipsa atque hic doloremque non?</p>
                        <p>7 likes</p>
                    </div>
                    <button>
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>
                </div>
                <div>
                    <img src="/images/profiles/nathanwpylestrangeplanet.jpg" alt="nathanwpylestrangeplanet" />
                    <div className="user-comment">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur ipsa atque hic doloremque non?</p>
                        <p>3 likes</p>
                    </div>
                    <button>
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>
                </div>
                <div className="user-comments-title see-all">
                    <div>Ver todos</div>
                </div>
                <div className="new-comment">
                    <img src="/images/profiles/catanacomics.jpg" alt="catanacomics" />
                    <input type="text" placeholder="Add a comment..." />
                    <button>Publish</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post