import React from 'react';
import '../components/css/Highlights.css';
import Button from '../components/Button';
import Card from '../components/Card';
import GreekSalad from '../assets/greekSalad.jpg';
import Bruschetta from '../assets/bruschetta.jpg';
import LemonDessert from '../assets/lemonDessert.jpg';

function Highlights() {
    return (
    <>
      <div className="highlights-container">
        <div className="highlights-header">
          <div className='highlights-title'>
            <h2>This weeks specials!</h2>
          </div>
          <div className='highlight-button'>
            <Button name='Online Menu'/>
          </div>
        </div>
        <div className='highlight-cards-container'>
          <div className="highlights-cards">
              <Card
              src={GreekSalad}
              alt='Greek Salad'
              dishName='Greek Salad'
              price='12.99'
              description='The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
              />
              <Card
              src={Bruschetta}
              alt='Bruschetta'
              dishName='Bruschetta'
              price='9.99'
              description='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
              />
              <Card
              src={LemonDessert}
              alt='Lemon Dessert'
              dishName='Lemon Dessert'
              price='7.99'
              description='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
              />
          </div>
        </div>
      </div>
    </>
  )
}

export default Highlights;