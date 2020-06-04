import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Preloader from '../Preloader';
import { connect } from 'react-redux';
import { joinGroup } from '../../actions/userActions';

const GroupModal = ({ groups: { current }, joinGroup }) => {
    const onJoin = (e) => {
        joinGroup(current._id);
    };
    return (
        <Fragment>
        {
            current ?
            <div id="group-modal" className="modal primary">
                <div className="modal-content">
                <h4 className="center-align white-text" style={{fontFamily: "Concert One"}}>{current.title}</h4>
                    <p className="white-text"><i className="material-icons left">group</i> {current.membersLength} Members</p>
                    <p className="white-text">{current.description}</p>
                </div>
                <div className="modal-footer" style={{backgroundColor:"rgb(0, 180, 216)"}}>
                    <Link to="#!" onClick={onJoin} className="waves-effect waves-light btn-small white black-text modal-close"><strong>Join</strong></Link>
                </div>
            </div>
            :
            <div id="group-modal" className="modal">
                <p>Loading...</p>
                <p>Please Wait</p>
            </div>
        }
        </Fragment>
    )
};
const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    { joinGroup }
)(GroupModal);