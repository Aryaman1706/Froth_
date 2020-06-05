import React, { useState, useEffect }from 'react';
import MyGroups from './MyGroups';
import { connect } from 'react-redux';

import { updateUser } from '../../actions/userActions';

const Profile = ({ user: { user }, updateUser }) => {

    useEffect(()=>{
        if(user){
            setProfile({
                name: user.name,
                email: user.email,
                phone: user.phone
            });
        }else{
            setProfile({
                name: "",
                email: "",
                phone: ""
            });
        }
    },[]);
    
    const [ profile, setProfile ] = useState({
        name:"",
        phone:"",
        email:""
    });

    const { name, phone, email } = profile;

    const onChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // update user info
        updateUser(profile);
    };
    
    return (
        <div className="container">
        <h4  style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}}>Hello { user? user.name : null }</h4>
        <br />
            <div className="row">
                <div className="col s4"><div style={{backgroundColor:"transparent", padding:"5px"}}>
                    <div className="center-align">
                        <img src="/images/1.jpeg" width="100%" height="100%"/>
                        <form>
                            <input
                                type="file"
                            />
                        </form>
                    </div> 
                </div></div>

                <div className="col s7 offset-s1"><div className="card-panel" style={{backgroundColor:"rgb(0, 180, 216)", padding:"10px"}}>
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="name" type="text" value={name} onChange={onChange} className="white-text" style={{borderBottomColor:'white'}} />
                        <label htmlFor="name" className="active white-text ">Name</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <input name="phone" type="text" value={phone} onChange={onChange} className="white-text" style={{borderBottomColor:'white'}} />
                        <label htmlFor="phone" className="active white-text ">Phone Number</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <input disabled name="email" type="text" value={email} onChange={onChange} className="white-text" style={{borderBottomColor:'white'}}/>
                        <label htmlFor="email" className="active white-text ">Email</label>
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
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    { updateUser }
)(Profile);