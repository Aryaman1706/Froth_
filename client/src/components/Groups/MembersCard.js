import React from 'react'
import MemberItem from './MemberItem'

const MembersCard = () => {
    return (
        <div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px", borderRadius: "10px", marginBottom:"30px"}}>
            <h5  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>Members</h5>
            <ul className="collection" style={{border:"0"}}>
                <MemberItem />
                <MemberItem />
                <MemberItem />
                <MemberItem />
                <MemberItem />
            </ul>
        </div>
    )
}

export default MembersCard
