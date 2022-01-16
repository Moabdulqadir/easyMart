import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import bed1 from '../../resources/images/bed1.jpg'
import bed2 from '../../resources/images/bed2.jpg'
import bed3 from '../../resources/images/bed3.jpg'
import chatIcon from "../../resources/images/chatIcon.png";
import product_card from './product_data';
import "./Carosel.css" 
function Carousel1() {
  const listItems = product_card.map((item)=>
    <div className='card' key={item.id}>
        <div className='card_img'>
            <img src={item.thumb}/>
        </div>
        <div className='card_header'>
            <h2>{item.product_name}</h2>
            <p>{item.description}</p>
            <p className='price'>{item.price}<span>{item.currency}</span></p>
            <div className='btn'>Add to cart</div>

        </div>

    </div>
    )
    return (
        <div style={{position: "relative"}}>
             <Carousel>
  <Carousel.Item interval={1000}>
  <div className='main_contaent2'  >
    
            <h3>nkjfdgjbgbdbgjkdbg</h3>
            {listItems}
            
        </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item interval={550}>
    <img
    style={{height:200}}
      className="d-block w-100"
      src={bed2}
      alt="Second slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:200}}

      src={bed3}      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel> 
        </div>
    )
}

export default Carousel1
