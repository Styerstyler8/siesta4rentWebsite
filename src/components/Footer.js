import '../styles/Footer.css'
import React from 'react'

const Footer = () => {
    return (
        <nav class="navbar bottom navbar-expand-lg navbar-dark" style={{ backgroundColor: "#052b47" }}>
            <div className='container-fluid'>
                <div className='col'>
                    <p className='white major'>Address:</p>
                    <ul className='list-unstyled white' >
                        <li>6555 Midnight Pass Rd.</li>
                        <li>Siesta Key, FL 34242</li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='white major'>Hours of Operation:</p>
                    <ul className='list-unstyled white' >
                        <li>Monday-Saturday: 9am-4pm</li>
                        <li>Fall Hours: 9pm-3pm</li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='white major'>Contact Us:</p>
                    <ul className='list-unstyled white' >
                        <li>Phone: +1 (941)-349-5500</li>
                        <li>rentals@siesta4rent.com</li>
                    </ul>
                </div>
                <div className='col'>
                    <p className='white shift major'>Additional Info:</p>
                    <ul className='list-unstyled white' >
                        <li>US Toll Free: 877-482-5550</li>
                        <li>Fax: +1 (941)-349-5527</li>
                    </ul>
                    <a href="https://siesta4rent.com/owners.pdf" target="_blank">Owners Packet</a>
                </div>
                <div className='col'>
                    <iframe 
                        frameborder="0" 
                        style={{ border: '1px solid black' }}
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCx3d07zxHPLvkFBLlAR3Ng8a9wsAsGoJ8&amp;q=place_id:ChIJt_k2HCRCw4gRf5SUKcdgqtw" 
                        allowfullscreen="">
                    </iframe>
                </div>
            </div>
        </nav>
    );
};

export default Footer;