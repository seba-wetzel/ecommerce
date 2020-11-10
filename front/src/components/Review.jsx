import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa'



const Review = () => {
    
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    console.log(rating,'RATING PAPITO')

    return ( 
        <div>
             
                {[...Array(5)].map((star, i) => {
                    const ratingValue = i+1
                        return (
                            
                            <label>
                                <input type='radio' name='rating' value={ratingValue}  onClick={() => setRating(ratingValue)}/>
                                <FaStar margin={8} size={50} color={ratingValue <= (hover || rating) ? "#ffd600" : "#64b5f6"} onMouseEnter={() => setHover(ratingValue)} onMouseLeave={() => setHover(null)}/>
                            </label>
                            
                        ) 
                    })}
                      
                        <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <i class="material-icons prefix">mode_edit</i>
                                <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
                                <label for="icon_prefix2">Dejanos tu opinion</label>
                            </div>
                            <div class="card-panel teal">
                                <span class="white-text">I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
                                </span>
                            </div>
                        </div>
                        
                        </form>
                    </div>
                            
     );
}


 
export default Review;