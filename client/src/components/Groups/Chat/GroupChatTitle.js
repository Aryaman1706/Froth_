import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setOpenGroup } from '../../../actions/groupActions';

const GroupChatTitle = ({groups:{ current }, setOpenGroup}) => {

    return (
        <Fragment>
            {
                current ?
                <Fragment>
                    <div className="col s3"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px", borderRadius: "10px", overflow: "auto", height: "82vh"}}>
                        <h6 className="white-text">Title</h6>
                        <h5  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>{current.title}</h5>
                        <h6 className="white-text">Members</h6>
                        <h6 style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}><i className="material-icons left">group</i> {current.membersLength} Members</h6>
                        <br />
                        <Link to="/group/info"  className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>View Members</strong></Link>
                    </div></div>
                </Fragment>
                :
                <Fragment>
                    <div className="col s3"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px", borderRadius: "10px", overflow: "auto", height: "82vh"}}>
                        <h6 className="white-text">Title</h6>
                        <h5  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>Title</h5>
                        <h6 className="white-text">Members</h6>
                        <h6 style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}><i className="material-icons left">group</i> 1 Members</h6>
                        <br />
                        <Link to="/group/info" className="waves-effect waves-light btn-small white black-text" style={{marginRight:"15px"}}><strong>View Members</strong></Link>
                    </div></div>
                </Fragment>
            }
        </Fragment>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    {setOpenGroup}
)(GroupChatTitle);