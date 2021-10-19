import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark pt-5 pb-3">
            <div className="d-flex justify-content-around text-light fs-6">
                <div>
                    <p>Appoinment:</p>
                    <p>10678</p>
                    <p>09666710678</p>
                    <p>(02) 55037242</p>
                </div>
                <div>
                    <h5>About Goal</h5>
                    <p>Our Vision</p>
                    <p>Our Mission</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
            <div>
                <p className="text-center text-light">© Copyright 2018 | All rights reserved. Unique Hospital Dhaka.</p>
            </div>
        </div>
    );
};

export default Footer;