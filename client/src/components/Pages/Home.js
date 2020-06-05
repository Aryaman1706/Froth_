import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import MyGroups from '../User/MyGroups';
import Groups from '../Groups/Groups';
import Preloader from '../Preloader';

const Home = ({ user: { loading, isAuthenticated } }) => {
    return (
        <Fragment>
        {
            isAuthenticated ?
                <Fragment>
                {
                    loading ?
                        <Preloader/>
                        :
                        <div className="container">
                            <MyGroups />
                            <br />
                            <Groups />
                        </div>
                }
                </Fragment>
                :
                <Fragment>
                    <h1 style={{fontFamily: "Concert One", color:"rgb(3, 4, 94)"}} className="center">Welcome to Froth</h1>
                </Fragment>
        }
        
        </Fragment>
    )
};

const mapStateToProps = state => ({
    user : state.user
});

export default connect(
    mapStateToProps,
    {}
)(Home);