import React from 'react';

const logoImg = '/images/s4rlogo.jpg'

const Header = () => {
    return (
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark" style={{ backgroundColor: "#052b47" }}>
            <a class="navbar-brand" href="http://siesta4rent.com/">
                <img src={logoImg} width="200" height="50" alt="Siesta 4-Rent" loading="lazy" />
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="http://siesta4rent.com/">Home <span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="https://siesta4rent.com/property.htm">Property List</a>
                    <a class="nav-item nav-link" href="https://siesta4rent.com/propview.htm">Calenders</a>
                    <a class="nav-item nav-link" href="https://siesta4rent.com/imap.pdf" target="_blank">Island Map</a>
                    <a class="nav-item nav-link" href="https://siesta4rent.com/vendors.htm">Things to do</a>
                    <a class="nav-item nav-link" href="https://siesta4rent.com/terms.html">Rental Terms</a>
                    <a class="nav-item nav-link" href="https://visitbeaches.org/" target="_blank">Beach Conditions</a>
                    <a class="nav-item nav-link" href="https://www.earthcam.com/usa/florida/sarasota/?cam=siestabeach" target="_blank">Beach Cam</a>
                </div>
                <form class="form-inline my-2 my-lg-0 ml-auto">
                    <a class="btn btn-large btn-outline-success my-2 my-sm-0" href="https://rentalprorentals.com/siesta4rent/search.cfm" role="button">Book Online</a>
                </form>
            </div>
        </nav>
    );
};

export default Header;