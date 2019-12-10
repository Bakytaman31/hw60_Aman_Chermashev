import React, {Component} from "react";
import Remote from "../../Components/Remote/Remote";
import Messages from "../../Components/Messages/Messages";
 class Chat extends Component {


    render() {
        return(
            <div className="Chat">
                <Remote/>
                <Messages/>
            </div>
        )
    }
 }

 export default Chat;