import React from 'react'

const TitleCard = () => {
    return (
        <div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px", borderRadius: "10px", marginBottom:"25px"}}>
            <h6 className="white-text">Title</h6>
            <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>Web Development</h4>
            <h6 className="white-text">Description</h6>
            <h6 style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>description</h6>
        </div>
    )
}

export default TitleCard
