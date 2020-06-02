import React,{useEffect, Fragment} from 'react';
import { Link } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';

import { loadUser } from '../actions/userActions';

const Navbar = ({ user: { user }, loadUser }) => {
    useEffect(()=>{
        loadUser();
        // initialize materialize
        M.AutoInit();
    }, []);

    return (
        <Fragment>
            <div className="navbar-fixed">
                <nav>
                    {
                        user ?  
                        <div className="nav-wrapper" style={{backgroundColor:"rgb(3, 4, 94)"}}>
                        <Link to="/" className="brand-logo">Froth_</Link>
                        <ul id="nav-mobile" className="right">
                            <li><Link to="/profile"><i className="material-icons left">account_circle</i>Profile</Link></li>
                            <li><Link to="/explore"><i className="material-icons left">search</i>Explore</Link></li>
                            <li><a href="#!"><i className="material-icons right">exit_to_app</i>Logout</a></li>
                        </ul>
                        </div>
                        :
                        <div className="nav-wrapper" style={{backgroundColor:"#1a237e"}}>
                        <Link to="/" className="brand-logo">Froth_</Link>
                        <ul id="nav-mobile" className="right">
                            <li><a href="http://localhost:5000/api/auth/google"><i className="material-icons right">person_add</i>Login With Google</a></li>
                        </ul>
                        </div>
                    }
                
                </nav>
            </div>
        <br/>
      </Fragment>
    )
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    { loadUser }
)(Navbar);
