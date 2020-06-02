import React from 'react';
import MyGroups from './MyGroups';

const Profile = () => {
    return (
        <div className="container">
        <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>Hello Aryaman Grover</h4>
        <br />
            <div className="row">
                <div className="col s4"><div style={{backgroundColor:"transparent", padding:"5px"}}>
                    <div className="center-align">
                        <img src="/images/1.jpeg" height="350px"/>
                        <form>
                            <input
                                type="file"
                            />
                        </form>
                    </div> 
                </div></div>

                <div className="col s7 offset-s1"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px"}}>
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="username" type="text" className="white-text" style={{borderBottomColor:'white'}} />
                        <label htmlFor="username" className="active white-text ">UserName</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <input id="Phone" type="text" className="white-text" style={{borderBottomColor:'white'}} />
                        <label htmlFor="Phone" className="active white-text ">Phone Number</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <input disabled id="Email" type="text" className="white-text" style={{borderBottomColor:'white'}} value="agrover1_be19@thapar.edu"/>
                        <label htmlFor="Email" className="active white-text ">Email</label>
                        </div>
                    </div>

                    <input className="waves-effect waves-light btn white black-text" 
                        type="submit"
                        value="Save Changes"
                    />
                </form>

                </div></div>
            </div>
            <br />
            <MyGroups />
        </div>
    )
}

export default Profile