import React from 'react'
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const events = [{
    image: '/stones.jpeg',
    title: 'Yoga Bali Retreat',
    description:'join me for a 10 day yoga retreat in Ubud Bali'
},
{
    image: 'https://www.pexels.com/photo/balance-blur-boulder-close-up-355863/',
    title: 'Yoga Bali Retreat',
    description:'join me for a 10 day yoga retreat in Ubud Bali'
},
{
    image: 'https://www.pexels.com/photo/balance-blur-boulder-close-up-355863/',
    title: 'Yoga Bali Retreat',
    description:'join me for a 10 day yoga retreat in Ubud Bali'
}
]

function EventCard({image, title, description}) {
 
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href="contact" variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
}

export default function Classes () {
    const [currentEvents] = useState(events);
    const eventItems = currentEvents.map(event => {
        return (
            <Col>
            <EventCard image={event.image} title={event.title} description={event.description}/>
        </Col>
        )
    })
    
    
  return (
    <div>
        <Row xs={1} md={3} className="g-4">
        {eventItems}
        </Row>
    </div>
  );
}
