import '../styles/App.css'
import React from 'react';
import Announcement from './Announcement'
import Header from './Header'
import HomeBody from './HomeBody';
import Footer from './Footer';
import PropertyPreviews from './PropertyPreviews';

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
            <PropertyPreviews />
            <HomeBody />
            <Footer />
        </div>
    );
};

export default App;