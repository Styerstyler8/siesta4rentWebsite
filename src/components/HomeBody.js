import '../styles/HomeBody.css'
import React from 'react';

const HomeBody = () => {
    return (
        <div>
            <div className='videoBackground'>
                <h5 className='aboutTitle'>Siesta 4-Rent condos and home rentals:</h5>
                <iframe className='video' frameBorder='0' src="https://www.youtube.com/embed/xhG12E22rtg?rel=0&amp;amp;showinfo=0&amp;autoplay=1&amp;loop=0" />
            </div>
            <div className='aboutContainer'>
                <h5 className='aboutTitle'>About Us:</h5>
                <p className='aboutText' style={{ paddingTop: '30px' }}>
                    Make your next vacation on Beautiful Siesta Key, The Jewel of Sarasota, Voted #1 Beach. Our pure white quartz beach and crystal blue green water, is like the Caribbean on the West coast of Florida. Our sand was voted the world's finest and whitest sand.
                </p>
                <p className='aboutText'>
                    <img style={{ marginLeft: '20px', border: '0.5px solid black', float: 'right' }} alt='Siesta 4-Rent Staff' src='/images/family.jpg'></img>
                    Siesta 4 Rent specializes in vacation condos and homes on Siesta Key. We offer a variety of accommodations from studios to 5 bedrooms. Our goal has always been to offer beautiful properties, great prices and excellent service. Siesta 4 Rent is family operated and has been serving Siesta Key owners & guests since 1997. All reservation agents are professional Licensed Real Estate Brokers or sales associates.
                </p>
                <p className='aboutText'>
                    Our website is designed to offer you ease searching our vacation properties. Seasonal rates, Pictures, Amenities, Availability and Online bookings without a complicated process. If you have any questions or are ready to book one &nbsp; of our Siesta Key Vacation Rentals, Please call 941-349-5500 or toll free in the US 1-877-482-5550.
                </p>
                <br />
                <br />
                <p className='aboutText' style={{ paddingBottom: '30px' }}>
                    For the latest updates follow us on facebook! &nbsp; &nbsp;
                    <a style={{ fontSize: '20px', color: 'darkBlue' }} href="https://www.facebook.com/Siesta4Rent/" className="fa fa-facebook"></a>
                </p>
            </div>
        </div>
    );
};

export default HomeBody;