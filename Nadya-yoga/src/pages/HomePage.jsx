import React from 'react'
import Image from 'react-bootstrap/Image';

export default function Homepage() { 
    return (
        <div>
            <h1>Home Page</h1>
            <Image src="/HeroImage.jpeg" fluid />;
            <div>
                <h3>About Us</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Cumque praesentium voluptatum voluptatibus alias, sint modi adipisci
                      nisi quae iure ad. Id et adipisci voluptates sunt necessitatibus
                       distinctio aliquid ratione aut?</p>
            </div>
        </div>
    )
}
