import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'

const PropertyPreview = () => {
    return (
        <Carousel style={{ border: '1px solid black', margin: '0 auto', width: '100%' }}>
            <Carousel.Item style={{ height: '500px' }}>
                <img
                    className="d-block w-100"
                    src="/images/OneBed.jpg"
                    alt="First slide"
                    style={{ height: '500px' }}
                />
                <Carousel.Caption>
                    <h3>Studios/One Bedrooms</h3>
                    <Button variant="primary">View Properties</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '500px' }}>
                <img
                    className="d-block w-100"
                    src="/images/TwoBed.jpg"
                    alt="Third slide"
                    style={{ height: '500px' }}
                />

                <Carousel.Caption>
                    <h3>Two Bedrooms</h3>
                    <Button variant="primary">View Properties</Button>                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '500px' }}>
                <img
                    className="d-block w-100"
                    src="/images/ThreeBed.jpg"
                    alt="Third slide"
                    style={{ height: '500px' }}
                />

                <Carousel.Caption>
                    <h3>Three Bedrooms</h3>
                    <Button variant="primary">View Properties</Button>                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{ height: '500px' }}>
                <img
                    className="d-block w-100"
                    src="/images/FourBed.jpg"
                    alt="Forth slide"
                    style={{ height: '500px' }}
                />

                <Carousel.Caption>
                    <h3>Four+ Bedrooms</h3>
                    <Button variant="primary">View Properties</Button>                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default PropertyPreview;