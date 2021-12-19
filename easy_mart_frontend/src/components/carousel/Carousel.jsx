import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import bed1 from '../../resources/images/bed1.jpg'
import bed2 from '../../resources/images/bed2.jpg'
import bed3 from '../../resources/images/bed3.jpg'
import Welcome from '../welcome/Welcome';

function Carousel1() {
    return (
        <div>
             <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      style={{height:550}}
      src={bed1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={550}>
    <img
    style={{height:550}}
      className="d-block w-100"
      src={bed2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:550}}

      src={bed3}      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
<Welcome/>
        </div>
    )
}

export default Carousel1
