import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GroupModal from './GroupModal';

const GroupItem = () => {
    return (
        <Fragment>
            <div className="col s4"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px"}}>
                <div className="card-content white-text">
                    <a href='#group-modal' className="modal-trigger white-text"><h5 className="card-title">Group Name</h5></a>
                    <p><i className="material-icons left">group</i> 172 Members</p>
                </div>
                <div className="card-action">
                    <Link to="#!" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Open</strong></Link>
                    <Link to="#!" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Join</strong></Link>
                </div>
            </div></div>
            <GroupModal />
        </Fragment>
        
    )
}

export default GroupItem
