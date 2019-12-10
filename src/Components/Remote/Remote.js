import React, {Component} from 'react';
import './Remote.css';

class Remote extends Component {
    state = {
      author: '',
      message: '',
    };

    getAuthor = event => {
      this.setState({author: event.target.value});
    };

    getMessage = event => {
        this.setState({message: event.target.value});
    };

    postMessage = () => {
        const url = 'http://146.185.154.90:8000/messages';
        const data = new URLSearchParams();

        data.set('message', this.state.message);

        data.set('author', this.state.author);
        fetch(url, {
            method: 'post',
            body: data,
        }).then(() => {
            this.setState({author: '', message: ''});
        });

    };

    render() {
        return (
            <div className="Remote">
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Username</label>
                        <input type="text"
                               className="form-control"
                               id="formGroupExampleInput"
                               onChange={event => this.getAuthor(event)}
                               value={this.state.author}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Message</label>
                        <input
                            type="text"
                            className="form-control"
                            id="formGroupExampleInput2"
                            onChange={event => this.getMessage(event)}
                            value={this.state.message}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.postMessage}>Send</button>
                </form>
            </div>
        );
    }
}

export default Remote;