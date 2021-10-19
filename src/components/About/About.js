import React from 'react';
import { Accordion } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <h1 className="text-center text-danger mt-5">Why You Choose Us?</h1>
            <div className="d-flex justify-content-center align-items-center m-5 w-75 mx-auto">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Excellence Service</Accordion.Header>
                        <Accordion.Body>
                            Clinical excellence must be the priority for any health care service provider. Unique Hospital ensures the best healthcare service comprise of professional (clinical) service excellence with outstanding personal service.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Qualified Doctors</Accordion.Header>
                        <Accordion.Body>
                            Unique Hospital aims to provide the highest possible level of care by the qualified consultants from India, Singapore, USA, UK & quality hospitals in the Middle East. Even the nurses & technicians are also proficiently trained from Bangladesh, Australia, UK, India and The Philippines.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>PHARMACY</Accordion.Header>
                        <Accordion.Body>
                            Unique Hospital Dhaka offers full service centralized out-patient and in-patient hospital pharmacies. Uniquebd Pharmacy is geared up to cater to the medication needs of our customers round-the-clock. Services are provided for all in-patients, as well as those patients served by our out-patient service departments and clinics. For more details, go to our Pharmacy page.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Great Infrastructure</Accordion.Header>
                        <Accordion.Body>
                            Unique Hospital has 3 buildings on both sides of the Panthapath Main Road, connected by an over bridge. The hospital with more than 6 lac Unique feet of space is situated in the central region of Dhaka city, capital of Bangladesh.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default About;