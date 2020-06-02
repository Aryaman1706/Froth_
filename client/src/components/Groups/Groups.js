import React, { Fragment, useEffect } from 'react';
import GroupItem from "./GroupItem";
import { Link } from 'react-router-dom';
import AddGroupModal from './AddGroupModal';
import M from 'materialize-css/dist/js/materialize.min.js';

const Groups = () => {
    useEffect(()=>{
       M.AutoInit();
    },[]);
    
    return (
        <Fragment>
        <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>Explore Groups</h4>
            <div className="row">
                <GroupItem />
            </div>

            <div className="fixed-action-btn">
                <a href='#add-group-modal' className="btn-floating btn-large green modal-trigger">
                    <i className="large material-icons">add</i>
                </a>
            </div>
            <AddGroupModal />
        </Fragment>
    )
}

export default Groups