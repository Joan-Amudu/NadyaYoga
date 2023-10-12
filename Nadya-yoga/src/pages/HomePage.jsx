import React from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Homepage() { 
    return (
        <div>
        
            <Image src="/HeroImage.jpeg" fluid />
            <div className="mx-auto p-4">
                <h3 >Welcome!</h3>
                <p>
                    I am delighted you have found your way to this portal.
                    My wish is for us to find a place in the Universal Field
                    where we can journey together through the landscape of the body with our
                    curiosity and wonderment, and reclaim our own innate freedom.
                </p>
                <p>
                    There is nothing higher we can achieve in this Earth School than the innate
                    knowledge of ourselves through the access of our Body Minds. I invite your to 
                    enter the journey with me…
                </p>
            </div>
            <div className="mx-auto p-4">
                <h4>Stay Connected!</h4>
                <Button href="/contact">Subscribe to my Mailing List</Button>
            </div>
        </div>
    )
}
