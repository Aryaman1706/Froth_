import React, { Fragment } from 'react'
import MyGroups from './MyGroups'
import Groups from './Groups'
import GroupModal from './GroupModal'

const Home = () => {
    return (
        <Fragment>
            <div className="container">
                <MyGroups />
                <br />
                <Groups />
            </div>
        </Fragment>
    )
}

export default Home
