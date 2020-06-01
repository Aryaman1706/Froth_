import React from 'react';
import { Link } from 'react-router-dom';

const GroupModal = () => {
    return (
        <div id="group-modal" className="modal">
            <div className="modal-content">
                <h4>Group Name</h4>
                <p><i className="material-icons left">group</i> 172 Members</p>
                <p>group description</p>
            </div>
            <div className="modal-footer">
                <Link to="#!" className="waves-effect waves-light btn-small green" style={{marginRight:"15px"}}>Open</Link>
                <Link to="#!" className="waves-effect waves-light btn-small green">Join</Link>
            </div>
        </div>
    )
}

export default GroupModal
