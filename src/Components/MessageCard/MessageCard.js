import React from 'react';
import './MessageCard.css'

const MessageCard = props => {
    return (
        <div className="MessageCard" key={props.key}>
            <p className="author">Author: {props.author}</p>
            <p className="message">Message: {props.message}</p>
        </div>
    );

};

export default MessageCard;