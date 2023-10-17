import React from 'react'
import { useState } from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const events = [{
    image: '/stones.jpeg',
    title: 'Bali Retreat',
    subtitle: '12-22 Jan 2024',
    description:'Join me for a 10 day yoga retreat in Ubud Bali. A retreat is an unparalleled opportunity to maximize location, food, movement, meditation and community to support yourself in advancing and resourcing your inner resevoir of Self. It is the most nourishing form of reset I know.'
},
{
    image: '/Community.jpeg',
    title: 'Hyde Park Community Yoga: ',
    subtitle: 'Every 1st Sunday of the Month',
    description:'Join me for a mixed, accessible, pay-what-you-wish yoga class. The class comprises gentle movements and postures, breathwork, and a relaxation or meditation practice. You can choose to practise on the floor, in a chair, or a mixture of both. To ensure that variations are provided for all participants, the pace of the class can be slow.'
},
{
    image: '/beginner.jpeg',
    title: '6 Week Beginner Yoga Program',
    subtitle: '21 Oct - 25 Nov',
    description:'The 6 week program is suitable for students who have never done yoga before or who are returning after an extended break.'
}
]

function EventCard({image, title, subtitle, description}) {
 
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href="contact" variant="outline-dark" className="pb-2">Find out More..</Button>
        </Card.Body>
      </Card>
    );
}

export default function Classes () {
    const [currentEvents] = useState(events);
    const eventItems = currentEvents.map(event => {
        return (                   
            <Col>
              <EventCard image={event.image} title={event.title} subtitle={event.subtitle} description={event.description}/>
            </Col>      
        )
    })
    
    
  return (
    <div> 
      <h2 className="text-center text-black mt-4 mb-4"><span>Upcoming Classes</span></h2>      
      <Image src="/classes.jpeg" height="250" fluid />
      <div className="mx-auto p-4">
        <h4>Find the perfect class for you!</h4>             
        <p>Nadya Yoga offers a gentle, meditative style of yoga for people of all abilities
           and yoga experience.
        </p>
        <p>Classes are suitable for all levels of fitness and yoga experience.
           Beginners are welcome!
        </p>
      </div>
        <Row xs={1} md={3} className=" mb-4 g-4">
        {eventItems}
        </Row>
    </div>
  );
}
