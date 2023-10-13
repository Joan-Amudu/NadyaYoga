import React from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

export default function Homepage() { 
    return (
        <div>
            <div>
                <Image src="/HeroImage.jpeg" fluid />
            </div>
            
            <div className="mx-auto p-4">
                <h3><span>Welcome!</span></h3>
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
                <h5><span>Stay Connected!</span></h5>
                <p>If you'd like more information about classes and memberships please contact us or subscribe to our mailing list.</p>
                <p>Don't be shy!</p>
                <Button href="/contact" variant="outline-dark" className="pb-2">Subscribe to my Mailing List</Button>
            </div>
        </div>
    )
}
