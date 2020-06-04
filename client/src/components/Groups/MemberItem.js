import React, { Fragment } from 'react'

const MemberItem = () => {
    return (
        <Fragment>
            <li className="collection-item avatar" style={{marginBottom:"15px"}}>
            <img src="/images/1.jpeg" className="circle" />
                <span className="title">UserName</span>
                <p>Email:-</p>
                <p>Email address</p>
            </li>
        </Fragment>
    )
}

export default MemberItem
