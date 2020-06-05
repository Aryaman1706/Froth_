import React, { Fragment, useEffect, useRef, useState } from 'react'
import ChatItem from './ChatItem'
import ChatInput from './ChatInput'
import { connect } from 'react-redux';
import { addMessage } from '../../actions/groupActions';
import io from 'socket.io-client';

let socket;
const Chat = ( { groups:{ messages, current },user: { user }, addMessage} ) => {
    const chatInput = useRef(null);

    const seeMe = () => {
        chatInput.current.scrollIntoView();
    };

    const [message, setMessage] = useState('');

    const onChange = (e) => {
        setMessage(e.target.value);
    };

    const ENDPOINT = "http://localhost";
    
    useEffect(()=>{
        seeMe();
        
        // Socket io work -->
        socket = io(ENDPOINT);
        socket.emit('join', current._id);

        socket.on('messageClient', (data) => {
            addMessage(data);
        });
        // -->
    },[]);

    const onSubmit =(e) => {
        e.preventDefault();
        addMessage({id: current._id, data: { name: user.name, message: message }});
        socket.emit('messageServer', message);
        setMessage('');
    }
    return (
        <Fragment>
        {
            messages ?
            <div className="col s9"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px", borderRadius: "10px", overflow: "auto", height: "82vh", position: "relative"}}>
                <div>
                {
                    messages.map(
                        message => <ChatItem message={message} />
                    )
                }
                </div>
                <div ref = {chatInput}>
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
                </div>
            </div></div>
            :
            null
        }
            
        </Fragment>
    )
};

const mapStateToProps = state => ({
    groups: state.groups,
    user: state.user
});

export default connect(
    mapStateToProps,
    { addMessage }
)(Chat);
