const Post = ({ photo }) => {
    const { description, likes, user, urls } = photo
    console.log({ description, likes, user, urls })
  return (
    <div>
        <div class="header">
            <img src={user.profile_image.large} alt={user.username} />
            <p>{user.username}</p>
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
        <img class="post-img" src={urls.regular} alt={user.username} />
        <div class="footer">
            <div class="footer-icons">
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                <ion-icon name="bookmark-outline"></ion-icon>
            </div>
            <div class="footer-data">
                <img src={user.profile_image.large} alt={user.usernames} />
                <p>Curtido por <strong>{user.username}</strong> e <strong>outras {likes} pessoas</strong></p>
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