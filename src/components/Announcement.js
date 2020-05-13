import '../styles/Announcement.css'
import React from 'react';

const Announcement = (props) => {
    return (
        <div className='backImg'>
            <div className='announcement'>
                <h2 className='title' >{props.announcementTitle}</h2>
                <p className='text' >{props.announcementText}</p>
            </div>
        </div>
    );
}

export default Announcement;