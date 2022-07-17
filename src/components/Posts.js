import React, { useEffect, useState } from 'react'
import unsplashAPI from '../services/axios'
import Post from './Post'

const defaultPhotos = [
    {
        likes: '101.523',
        user: {
            username: 'meowed',
            profile_image: {
                large: '/images/profiles/meowed.jpg'
            }
        },
        urls: {
            regular: '/images/posts/gato-telefone 1.jpg'
        }
    },
    {
        likes: '110.023',
        user: {
            username: 'barked',
            profile_image: {
                large: '/images/profiles/barked.jpg'
            }
        },
        urls: {
            regular: '/images/posts/dog 1.png'
        }
    },
]

const Posts = () => {
    const [photos, setPhotos] = useState([...defaultPhotos])

    useEffect(() => {
        unsplashAPI.get('random', {
            params: {
                client_id: 'yuXyDOOKJupHBPTCg4md34cMj_JxbALYpBYdzyXW7XQ',
                count: 5
            }
        })
        .then(({ data }) => setPhotos(arr => [...data, ...arr]))
        .catch(() => console.log('Rate Limit Exceeded for Demo App (50 requests/hour)'))
    }, [])

    return (
    <div className='posts'>
        {photos.length > 0 
            ? photos.map(photo => (<Post key={photo.id} photo={photo} />))
            : <div className="loader">Loading...</div>
        }
    </div>
  )
}

export default Posts