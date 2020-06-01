import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const GroupItem = () => {
    return (
        <Fragment>
            <div className="col s4"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px"}}>
                <div className="card-content white-text">
                    <a href='#group-modal' className="modal-trigger white-text"><h5 className="card-title">Group Name</h5></a>
                    <p><i className="material-icons left">group</i> 172 Members</p>
                </div>
                <div className="card-action">
                    <Link to="#!" className="waves-effect waves-light btn-small green" style={{marginRight:"15px"}}>Open</Link>
                    <Link to="#!" className="waves-effect waves-light btn-small green">Join</Link>
                </div>
            </div></div>
        </Fragment>
    )
}

export default GroupItem
