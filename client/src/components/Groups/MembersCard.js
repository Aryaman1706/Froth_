import React, { Fragment, useEffect } from 'react';
import MemberItem from './MemberItem';
import { connect } from 'react-redux';
import { loadMembers } from '../../actions/groupActions';

const MembersCard = ({groups : { wholeGroup, current, members }, loadMembers}) => {
    if(current){
        useEffect(()=>{
           console.log(1);
        },[current])
    };
    return (
       <Fragment>
        <div className="card-panel primary" style={{padding:"10px", borderRadius: "10px", marginBottom:"25px"}}>
                <h5  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>Members</h5>
                <ul className="collection" style={{border:"0"}}>
                {
                    members.map(
                        member => <MemberItem id={member} key={member}/>
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
    { loadMembers }
)(MembersCard);