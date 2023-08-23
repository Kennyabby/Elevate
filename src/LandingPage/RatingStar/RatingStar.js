import './RatingStar.css'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { BsStarHalf } from 'react-icons/bs'

const RatingStar = ({ rating, color }) => {
  var stars = []
  var otherStars = []

  const str = Math.floor(rating)
  for (let i = 0; i < str; i++) {
    stars = stars.concat([{ color: color }])
  }
  for (let i = 0; i < 5 - str; i++) {
    otherStars = otherStars.concat([{ color: color }])
  }
  const diff = rating - str

  return (
    <>
      <div className='star'>
        {stars.map((str,id) => {
          return <AiFillStar style={{ color: str.color }} key={id}/>
        })}
        {otherStars.map((str, i) => {
          if (i === 0 && diff > 0) {
            return (
              <BsStarHalf style={{ color: str.color, fontSize: '.89rem' }} key={i}/>
            )
          } else {
            return <AiOutlineStar style={{ color: str.color }} key={i}/>
          }
        })}
      </div>
    </>
  )
}

export default RatingStar
