import React from 'react'

const Preloader = () => {
    return (
            <div className="preloader-wrapper big active" style={loader}>
                <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
    )
}

export default Preloader

const loader = {
    position: "absolute",
    margin: "auto",
    top: "50vh",
    bottom: "50vh",
    left: "0",
    right: "0"
}