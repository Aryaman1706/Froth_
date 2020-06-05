import React from 'react'

const ChatInput = () => {
    return (
        <div>
            <form>
                <div className="row" style={{margin: "0px"}}>
                    <div className="input-field col s12">
                    <input name="message" type="text" className="white-text" style={{borderBottomColor:'white'}} />
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
}

export default ChatInput
