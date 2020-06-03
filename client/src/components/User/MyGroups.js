import React, { Fragment } from 'react';
import MyGroupItem from "./MyGroupItem";

import { connect } from 'react-redux';

const MyGroups = ({ user: { user, myGroups } }) => {
    return (
        <Fragment>
        <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>My Groups</h4>
            <div className="row">
            {
                myGroups ?
                    <Fragment>
                        {
                            myGroups.map( group =>
                                <MyGroupItem group={group} key={group._id} />
                            )
                        }
                    </Fragment>
                    :
                    null
            }
            
            </div>
        </Fragment>
    )
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    {}
)(MyGroups);