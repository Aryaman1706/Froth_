import React from 'react';
import TitleCard from './TitleCard';
import MembersCard from './MembersCard';
import { connect } from 'react-redux';
import Common from '../Common';

const GroupInfo = ({groups: { groups, current }}) => {
    return (
        <div className="container">
            <TitleCard current={current}/>
            <MembersCard />
        </div>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    {}
)(GroupInfo);
