import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWholeGroup } from '../actions/groupActions';
import { loadMembers } from '../actions/groupActions';

const Common = ({groups:{ current, wholeGroup }, getWholeGroup, loadMembers}) => {
    if(current){
        useEffect(()=>{
            getWholeGroup(current._id);
        },[current])
    };

    return (
        <div>
        </div>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    { getWholeGroup, loadMembers }
)(Common)
