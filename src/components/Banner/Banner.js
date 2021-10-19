import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner1 from '../../images/Banner/Banner1.jpg'
import Banner2 from '../../images/Banner/Banner2.jpg'
import Banner3 from '../../images/Banner/Banner3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src={Banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="text-warning fst-italic fs-1 fw-bold">Your Health is Our Priority</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src={Banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning fst-italic fs-1 fw-bold">Curing with our care</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block h-50 w-100"
                        src={Banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="text-warning fst-italic fs-1 fw-bold">We Care About Your Health</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;