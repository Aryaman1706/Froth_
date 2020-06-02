import React from 'react';
import { Link } from 'react-router-dom';

const MyGroupItem = () => {
    return (
        <div className="col s4"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px"}}>
            <div className="card-content white-text">
                <h5 className="card-title">Group Name</h5>
                <p><i className="material-icons left">group</i> 172 Members</p>
            </div>
            <div className="card-action">
                <Link to="#!" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Open</strong></Link>
                <Link to="#!" className="waves-effect waves-light btn-small white red-text"><strong>Leave</strong></Link>
            </div>
        </div></div>
    )
}

export default MyGroupItem
