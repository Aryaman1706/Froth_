import React, { Fragment, useEffect } from 'react';
import MemberItem from './MemberItem';
import { connect } from 'react-redux';
import { loadMembers, setOpenGroup } from '../../actions/groupActions';

const MembersCard = ({groups : { wholeGroup, openGroup, current, members }, loadMembers, setOpenGroup}) => {

    useEffect(()=>{
        if( openGroup !== current._id ){
             wholeGroup.members.forEach(member => {
                loadMembers(member);
            });
            setOpenGroup(current._id);
        } 
    },[current]);

    return (
       <Fragment>
        <div className="card-panel primary" style={{padding:"10px", borderRadius: "10px", marginBottom:"25px"}}>
                <h5  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>Members</h5>
                <ul className="collection" style={{border:"0"}}>
                {
                    members.map(
                        member => <MemberItem  member={member} key={member._id} />
                    )
                }
                </ul>
            </div>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    { loadMembers, setOpenGroup }
)(MembersCard);