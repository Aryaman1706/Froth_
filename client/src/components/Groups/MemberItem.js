import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { loadMembers } from '../../actions/groupActions';

const MemberItem = ({member}) => {
    const { name, email } = member;
    return (
        <Fragment>
            <li className="collection-item avatar" style={{marginBottom:"15px", borderRadius: "10px"}}>
            <img src="/images/1.jpeg" className="circle" />
                <span className="title truncate">{ name }</span>
                <p>Email:-</p>
                <p className="truncate">{ email }</p>
            </li>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    groups: state.groups
});

export default connect(
    mapStateToProps,
    { loadMembers }
)(MemberItem);
