import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { addMessage } from '../../../actions/groupActions';
import io from 'socket.io-client';

const ChatInput = ({ groups:{ messages, current }, addMessage }) => {
    const ENDPOINT = 'http://localhost';

    let socket;
    useEffect(()=>{
        // Socket io work -->
        socket = io(ENDPOINT);
        // -->
    },[]);
    
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        setMessage(e.target.value);
    };

    const onSubmit =(e) => {
        e.preventDefault();
        addMessage(message);
        socket.emit('join', current._id);
        setMessage('');
    }
    return (
        <div>
            <form onSubmit={onSubmit} >
                <div className="row" style={{margin: "0px"}}>
                    <div className="input-field col s12">
                    <input name="message" type="text" onChange={onChange} value={message} className="white-text" style={{borderBottomColor:'white'}} />
                    <label htmlFor="message" className="active white-text ">Message</label>
                    <input className="waves-effect waves-light btn white black-text" 
                        type="submit"
                        value="Send"
                    />
                    </div>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});
export default connect(
    mapStateToProps,
    { addMessage }
)(ChatInput);
