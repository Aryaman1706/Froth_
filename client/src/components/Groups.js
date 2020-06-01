import React, { Fragment } from 'react';
import GroupItem from "./GroupItem";

const Groups = () => {
    return (
        <Fragment>
        <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>Explore Groups</h4>
            <div className="row">
                <GroupItem />
            </div>
        </Fragment>
    )
}

export default Groups