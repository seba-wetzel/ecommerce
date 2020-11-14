import React, { useState } from "react"
import { FaStar } from 'react-icons/fa'



const Stars = ({ value }) => {
    const [rating, setRating] = useState(value)
    const [hover, setHover] = useState(null)
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                        // onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            margin={8}
                            size={20}
                            color={ratingValue <= (hover || rating) ? "#ffd600" : "#64b5f6"}
                        // onMouseEnter={() => setHover(ratingValue)}
                        // onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    )
}
export default Stars