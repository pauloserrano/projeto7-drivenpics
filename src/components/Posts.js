import React, { useEffect, useState } from 'react'
import unsplashAPI from '../services/axios'
import Post from './Post'

// Unsplash API
// https://api.unsplash.com/photos/random?client_id=yuXyDOOKJupHBPTCg4md34cMj_JxbALYpBYdzyXW7XQ

const Posts = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        unsplashAPI.get('random', {
            params: {
                client_id: 'yuXyDOOKJupHBPTCg4md34cMj_JxbALYpBYdzyXW7XQ',
                count: 5
            }
        })
        .then(({ data }) => {
            setPhotos(arr => [...arr, ...data])
        })
        .catch(err => console.log(err))
        
    }, [])

    return (
    <div className='posts'>
        {photos.length > 0 
            ? photos.map(photo => (<Post key={photo.id} photo={photo} />))
            : <div>Waiting</div>}
        <div>
            <div className="header">
                <img src="/images/profiles/nathanwpylestrangeplanet.jpg" alt="nathanwpylestrangeplanet" />
                <p>nathanwpylestrangeplanet</p>
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            <video width="100%" autoPlay muted loop controls>
                <source src="/videos/video.mp4" type="video/mp4" />
                <source src="/videos/video.ogg" type="video/ogg" />
            </video>
            <div className="footer">
                <div className="footer-icons">
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
                <div className="footer-data">
                    <img src="/images/profiles/wawawiwacomicsa.jpg" alt="wawawiwacomicsa" />
                    <p>Curtido por <strong>wawawiwacomicsa</strong> e <strong>outras 56.013 pessoas</strong></p>
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
    </div>
  )
}

export default Posts