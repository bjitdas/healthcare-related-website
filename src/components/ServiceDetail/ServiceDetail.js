import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';

const ServiceDetail = () => {
    const { allServices } = useServices();
    const { serviceId } = useParams();

    const service = allServices.find(service => service === serviceId)

    return (
        <div class="card" style="width: 18rem;">
            <img src={service.img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{service.name}</h5>
                <p class="card-text">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;