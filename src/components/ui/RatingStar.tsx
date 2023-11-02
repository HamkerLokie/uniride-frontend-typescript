import { useState } from 'react'

interface StarRatingProps {
  totalStars: number
  onRatingChange: (rating: number) => void
}

const RatingStar: React.FC<StarRatingProps> = ({
  totalStars,
  onRatingChange
}) => {
  const [rating, setRating] = useState<number>(0)

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating)
    onRatingChange(selectedRating)
  }
  return (
    <div className=' flex justify-around'>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index + 1)}
          style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'black' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  )
}

export default RatingStar
