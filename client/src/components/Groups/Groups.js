import React, { Fragment, useEffect } from 'react';
import GroupItem from "./GroupItem";
import { Link } from 'react-router-dom';
import AddGroupModal from './AddGroupModal';
import M from 'materialize-css/dist/js/materialize.min.js';

import { connect } from 'react-redux';
import GroupModal from './GroupModal';

const Groups = ({ groups: { groups } }) => {
    useEffect(()=>{
       M.AutoInit();
    },[]);
    
    return (
        <Fragment>
        <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>Explore Groups</h4>
            <div className="row">
            {
                groups.map( group => 
                    <GroupItem group={group} key={group._id}/>
            )}
            </div>
            <div className="fixed-action-btn">
                <a href='#add-group-modal' className="btn-floating btn-large modal-trigger primary">
                    <i className="large material-icons">add</i>
                </a>
            </div>
            <AddGroupModal />
        </Fragment>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    {}
)(Groups);