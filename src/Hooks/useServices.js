import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const useServices = () => {
    const [allServices, setServices] = useState([])

    useEffect(() => {
        fetch("./services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return {
        allServices
    }
};

export default useServices;