import React, { useEffect } from 'react'
import GroupChatTitle from './GroupChatTitle'
import Chat from './Chat'
import { connect } from 'react-redux';
import { getWholeGroup } from '../../actions/groupActions';
import Common from '../Common';

const GroupChat = ({ groups:{ groups, current, wholeGroup }, getWholeGroup }) => {

    return (
        <div className="container">
            <div className="row">
                <GroupChatTitle current={current} />
                <Chat />
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    { getWholeGroup }
)(GroupChat);