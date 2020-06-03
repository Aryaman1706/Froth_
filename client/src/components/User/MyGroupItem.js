import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { leaveGroup } from '../../actions/userActions';

const MyGroupItem = ({group, leaveGroup}) => {
    const { title, description, membersLength, _id } = group;
    const onLeave =(e) => {
        leaveGroup(_id);
    };

    return (
        <div className="col s4"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px"}}>
            <div className="card-content white-text">
                <h5 className="card-title">{title}</h5>
                <p><i className="material-icons left">group</i> {membersLength} Members</p>
            </div>
            <div className="card-action">
                <Link to="#!" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Open</strong></Link>
                <Link onClick={onLeave} className="waves-effect waves-light btn-small white red-text"><strong>Leave</strong></Link>
            </div>
        </div></div>
    )
}

export default connect(
    null,
    { leaveGroup }
)(MyGroupItem)
