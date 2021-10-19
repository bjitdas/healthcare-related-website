import React from 'react';
import { Card, Col } from 'react-bootstrap';
// import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Service.css'


const Service = ({ service }) => {
    const { id, img, description, name } = service;


    return (
        <div className="card-container">
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body className="card-detail text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>

                        <Link to={`/detail/${id}`}>
                            <button className="btn btn-primary">See More</button>
                        </Link>
                    </Card.Body>

                </Card>
            </Col>
        </div>
    );
};

export default Service;