import '../styles/App.css'
import React from 'react';
import Announcement from './Announcement'
import Header from './Header'

const covidText = 'As of April 30th: Due to Covid-19 and Executive order 20-87 we are ordered to temporarily suspend operations for now. Hopefully we can resume operations during Phase 2 tentatively on May 18th. No check-ins or reservations are allowed during this period. If you have any upcoming reservations, we will handle them once we are allowed to do so. Thank you for your understanding. Dates we are closed will not count against the 90 day cancellation policy. Keep checking back for the latest updates. Please don\'t email or call the office, as messages will not be answered during this time period.';
const announcementBackground = '/images/beach.jpg';

const App = () => {
    return (
        <div className='background'>
            <Header />
            <Announcement 
                announcementTitle='COVID-19 INFO UPDATE:'
                announcementText={covidText}
                backgroundImage={announcementBackground}
            />
            Insert form here to search for properties by specific information
            <div className='aboutContainer'>
                <h5 className='videoTitle'>Siesta 4-Rent condos and home rentals:</h5>
                <iframe className='video' frameBorder='0' src="https://www.youtube.com/embed/xhG12E22rtg?rel=0&amp;amp;showinfo=0&amp;autoplay=1&amp;loop=0" />
                <h5 className='aboutTitle'>About Us:</h5>
                <p className='aboutText' style={{ paddingTop: '30px'}}>
                    Make your next vacation on Beautiful Siesta Key, The Jewel of Sarasota, Voted #1 Beach. Our pure white quartz beach and crystal blue green water, is like the Caribbean on the West coast of Florida. Our sand was voted the world's finest and whitest sand.
                </p>
                <p className='aboutText'>
                    <img style={{ float: 'right' }} alt='Siesta 4-Rent Staff' src='/images/family.jpg'></img>
                    Siesta 4 Rent specializes in vacation condos and homes on Siesta Key. We offer a variety of accommodations from studios to 5 bedrooms. Our goal has always been to offer beautiful properties, great prices and excellent service. Siesta 4 Rent is family operated and has been serving Siesta Key owners & guests since 1997. All reservation agents are professional Licensed Real Estate Brokers or sales associates.
                </p>
                <p className='aboutText'>
                    Our website is designed to offer you ease searching our vacation properties. Seasonal rates, Pictures, Amenities, Availability and Online bookings without a complicated process. If you have any questions or are ready to book one &nbsp; of our Siesta Key Vacation Rentals, Please call 941-349-5500 or toll free in the US 1-877-482-5550.
                </p>
                <br />
                <br />
                <p className='aboutText' style={{ paddingBottom: '30px' }}>
                    For the latest updates follow us on facebook! &nbsp; &nbsp;
                    <a style={{ fontSize: '20px', color:'darkBlue' }} href="https://www.facebook.com/Siesta4Rent/" className="fa fa-facebook"></a>
                </p>
            </div>
        </div>
    );
};

export default App;