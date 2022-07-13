import React from 'react'

const Posts = () => {
  return (
    <div className='posts'>
        <div>
            <div class="header">
                <img src="/images/profiles/nathanwpylestrangeplanet.jpg" alt="nathanwpylestrangeplanet" />
                <p>nathanwpylestrangeplanet</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <video width="100%" autoplay muted loop controls>
                <source src="/videos/video.mp4" type="video/mp4" />
                <source src="/videos/video.ogg" type="video/ogg" />
            </video>
            <div class="footer">
                <div class="footer-icons">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div class="footer-data">
                    <img src="/images/profiles/wawawiwacomicsa.jpg" alt="wawawiwacomicsa" />
                    <p>Curtido por <strong>wawawiwacomicsa</strong> e <strong>outras 56.013 pessoas</strong></p>
                </div>
                <div class="comments">
                    <div class="user-comments-title">
                        <div>Comentários</div>
                    </div>
                    <div>
                        <img src="/images/profiles/badvibesmemes.jpg" alt="badvibesmemes" />
                        <div class="user-comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur quaerat neque placeat quis excepturi ipsa atque hic doloremque non?</p>
                            <p>7 likes</p>
                        </div>
                        <button>
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>
                    </div>
                    <div>
                        <img src="/images/profiles/nathanwpylestrangeplanet.jpg" alt="nathanwpylestrangeplanet" />
                        <div class="user-comment">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur ipsa atque hic doloremque non?</p>
                            <p>3 likes</p>
                        </div>
                        <button>
                            <ion-icon name="heart-outline"></ion-icon>
                        </button>
                    </div>
                    <div class="user-comments-title see-all">
                        <div>Ver todos</div>
                    </div>
                    <div class="new-comment">
                        <img src="/images/profiles/catanacomics.jpg" alt="catanacomics" />
                        <input type="text" placeholder="Add a comment..." />
                        <button>Publish</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts