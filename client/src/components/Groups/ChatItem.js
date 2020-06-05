import React from 'react'

const ChatItem = ({message}) => {
    return (
        <div className="white" style={{borderRadius:"10px", padding:"5px", margin:"10px"}}>
            <p style={{marginBottom:"5px", marginTop:"5px"}}>{message.name}</p>
            <p style={{marginBottom:"5px", marginTop:"5px"}}>{message.message}</p>
        </div>
    )
}

export default ChatItem
