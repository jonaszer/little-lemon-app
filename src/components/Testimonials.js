import React from 'react';
import Review from '../components/Review.js';
import '../components/css/Testimonials.css';
import Photo from '../assets/photo.jpg';


function Testimonials() {
  return (
    <>
    <div className="testimonials-container">
        <h1>Testimonials</h1>
            <div className="all-reviews-container">
                <div class="reviews">
                    <Review
                        src={Photo}
                        alt='Users photo'
                        name='Pete'
                        review='Really delicious food! I recommend everybody to give it a try!'
                    />
                    <Review
                        src={Photo}
                        alt='Users photo'
                        name='Pete'
                        review='Really delicious food! I recommend everybody to give it a try!'
                    />
                    <Review
                        src={Photo}
                        alt='Users photo'
                        name='Pete'
                        review='Really delicious food! I recommend everybody to give it a try!'
                    />
                    <Review
                        src={Photo}
                        alt='Users photo'
                        name='Pete'
                        review='Really delicious food! I recommend everybody to give it a try!'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonials;