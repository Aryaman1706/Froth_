import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GroupModal from './GroupModal';
import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';
import { joinGroup } from '../../actions/userActions';

const GroupItem = ({ group, joinGroup}) => {
    useEffect(()=>{
        M.AutoInit();
    },[]);

    const { title, description, membersLength, _id } = group;

    const onJoin = (e) => {
        joinGroup(_id);
    };

    return (
        <Fragment>
            <div className="col s4"><div className="card-panel primary" style={{padding:"10px"}}>
                <div className="card-content white-text">
                    <a href='#group-modal' className="modal-trigger white-text"><h5 className="card-title">{ title }</h5></a>
                    <p><i className="material-icons left">group</i> { membersLength } Members</p>
                </div>
                <div className="card-action">
                    <Link to="#!" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Open</strong></Link>
                    <Link onClick={onJoin} className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Join</strong></Link>
                </div>
            </div></div>
        </Fragment>
        
    )
};

export default connect(
    null,
    { joinGroup }
)(GroupItem);