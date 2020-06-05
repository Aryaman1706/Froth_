import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GroupModal from './GroupModal';
import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';
import { joinGroup } from '../../actions/userActions';
import { setInfo } from '../../actions/groupActions';

const GroupItem = ({ group, joinGroup, setInfo}) => {
    useEffect(()=>{
        M.AutoInit();
    },[]);

    const { title, description, membersLength, _id } = group;

    const onJoin = (e) => {
        joinGroup(_id);
    };

    const modalOpen = (e) => {
        setInfo(group);
    };

    return (
        <Fragment>
            <div className="col s4"><div className="card-panel primary" style={{padding:"10px", borderRadius: "10px"}}>
                <div className="card-content white-text">
                    <h5 className="card-title white-text">{ title }</h5>
                    <p><i className="material-icons left">group</i> { membersLength } Members</p>
                </div>
                <div className="card-action">
                    <a href="#group-modal" onClick={modalOpen} className="modal-trigger waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Info</strong></a>
                    <Link to="#!" onClick={onJoin} className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>Join</strong></Link>
                </div>
            </div></div>
            <GroupModal />
        </Fragment>
        
    )
};

export default connect(
    null,
    { joinGroup, setInfo }
)(GroupItem);