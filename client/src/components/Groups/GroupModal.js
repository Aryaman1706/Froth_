import React from 'react';
import { Link } from 'react-router-dom';

const GroupModal = () => {
    return (
        <div id="group-modal" className="modal" style={{backgroundColor:"rgb(0, 180, 216)"}}>
            <div className="modal-content">
            <h4 className="center-align white-text" style={{fontFamily: "Concert One"}}>Group Name</h4>
                <p className="white-text"><i className="material-icons left">group</i> 172 Members</p>
                <p className="white-text">group description</p>
            </div>
            <div className="modal-footer" style={{backgroundColor:"rgb(0, 180, 216)"}}>
                <Link to="#!" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}>Open</Link>
                <Link to="#!" className="waves-effect waves-light btn-small white black-text">Join</Link>
            </div>
        </div>
    )
}

export default GroupModal
