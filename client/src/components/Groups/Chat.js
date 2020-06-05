import React, { Fragment, useEffect, useRef } from 'react'
import ChatItem from './ChatItem'
import ChatInput from './ChatInput'

const Chat = () => {
    const chatInput = useRef(null);

    const seeMe = () => {
        chatInput.current.scrollIntoView();
    };

    useEffect(()=>{
        seeMe();
        // get messages
    },[]);
    return (
        <Fragment>
            <div className="col s9"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px", borderRadius: "10px", overflow: "auto", height: "82vh", position: "relative"}}>
                <div>
                    <ChatItem />
                </div>
                <div ref = {chatInput}>
                <ChatInput />
                </div>
            </div></div>
        </Fragment>
    )
}

export default Chat
