import React from 'react';

function Review(props) {
  return (
    <>
        <div className="review-container">
            <div className="review-content">
                <h4>Rating</h4>
                <div className="img-name-container">
                    <img src={props.src} alt={props.alt} />
                    <h3>{props.name}</h3>
                </div>
                <p>{props.review}</p>
            </div>
        </div>
    </>
  )
}

export default Review;