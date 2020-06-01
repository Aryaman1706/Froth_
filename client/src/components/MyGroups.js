import React, { Fragment } from 'react';
import MyGroupItem from "./MyGroupItem";

const MyGroups = () => {
    return (
        <Fragment>
        <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>My Groups</h4>
            <div className="row">
                <MyGroupItem />
            </div>
        </Fragment>
    )
}

export default MyGroups;