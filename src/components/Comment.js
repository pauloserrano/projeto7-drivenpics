import { useState } from "react"

const Comment = ({ user, img, text, likes: likeAmount }) => {
    const [isLiked, setIsLiked] = useState(false)
    const [likes, setLikes] = useState(`${likeAmount}`.replaceAll('.', ''))

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
        <img src={img} alt={user} />
        <div className="user-comment">
            <p>{text}</p>
            <p>{formatLike(likes)} likes</p>
        </div>
        <button onClick={handleLike}>
            {isLiked 
                ? <ion-icon name="heart"></ion-icon>
                : <ion-icon name="heart-outline"></ion-icon>}
        </button>
    </div>
  )
}

export default Comment