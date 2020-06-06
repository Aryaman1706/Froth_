import React, { Fragment } from 'react';

const TitleCard = ({current}) => {

    return (
        <div className="card-panel primary" style={{padding:"10px", borderRadius: "10px", marginBottom:"25px"}}>
            {
                current ?
                <Fragment>
                    <h6 className="white-text">Title</h6>
                    <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>{current.title}</h4>
                    <h6 className="white-text">Description</h6>
                    <h6 style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>{current.description}</h6>
                </Fragment>
                :
                <Fragment>
                    <h6 className="white-text">Title</h6>
                    <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)", marginTop:"12px"}}>Title</h4>
                    <h6 className="white-text">Description</h6>
                    <h6 style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>Description</h6>
                </Fragment>
            }
        </div>
    )
};

export default TitleCard