import React, {Component} from 'react';
import './Messages.css'
import axios from 'axios';
import MessageCard from "../MessageCard/MessageCard";

class Messages extends Component {
    state = {
        messages:[]
    };

    componentDidMount() {

        setInterval(() => {
            axios({
                method: 'get',
                url: 'http://146.185.154.90:8000/messages'
            })
                .then(response => {
                    this.setState({messages: response.data})
                })
        } ,2000);

    }

    render() {
        return (
            <div className="Messages" key="Messages">
                {this.state.messages.map(messages => {
                    return(
                        <MessageCard
                            author={messages.author}
                            message={messages.message}
                            key={messages.id}
                        />
                    )
                })}
            </div>
        );
    }
}

export default Messages;