import React from 'react';
import './ChatEmpty.css';
import cool from './cool.png';

function ChatEmpty() {
    return (
        <div className='chatEmpty'>
            <div className="chatEmpty__container">
               <img src={cool} alt=""/>
               <div className="chatEmpty__text">
                    <h2>Keep your phone connected</h2>
                    <p>WhatsApp connects to your phone to sync messages. To reduce data</p>
                    <p>usage, connect your phone to Wi-Fi.</p>
                </div>
           </div>
        </div>
    )
}

export default ChatEmpty
