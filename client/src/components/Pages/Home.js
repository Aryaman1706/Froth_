import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import MyGroups from '../User/MyGroups';
import Groups from '../Groups/Groups';
import Preloader from '../Preloader';

const Home = ({ user: { loading } }) => {

    return (
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
    )
};

const mapStateToProps = state => ({
    user : state.user
});

export default connect(
    mapStateToProps,
    {}
)(Home);