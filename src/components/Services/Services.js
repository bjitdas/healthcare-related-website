import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from './Service/Service';

const Services = () => {

    const { allServices } = useServices()
    console.log(allServices)

    return (
        <div>
            <h1 className="text-center text-light fw-bold mt-5"><span className="p-3 rounded bg-primary">Our Services</span></h1>
            <Row xs={1} md={3} className="g-4 m-4">
                {
                    allServices.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;