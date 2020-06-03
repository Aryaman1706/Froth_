import React from 'react';
import { Link } from 'react-router-dom';

const GroupModal = (props) => {
    const { title, description, membersLength } = props.group;
    return (
        <div id="group-modal" className="modal primary">
            <div className="modal-content">
            <h4 className="center-align white-text" style={{fontFamily: "Concert One"}}>{title}</h4>
                <p className="white-text"><i className="material-icons left">group</i> {membersLength} Members</p>
                <p className="white-text">{description}</p>
            </div>
            <div className="modal-footer" style={{backgroundColor:"rgb(0, 180, 216)"}}>
                <Link to="#!" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}>Open</Link>
                <Link to="#!" className="waves-effect waves-light btn-small white black-text">Join</Link>
            </div>
        </div>
    )
}

export default GroupModal