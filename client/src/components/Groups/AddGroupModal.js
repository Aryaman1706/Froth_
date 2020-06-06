import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';

import { addGroup } from '../../actions/groupActions';

const AddGroupModal = ({ addGroup }) => {

    const [ groupData, setGroupData ] = useState({
        title: "",
        description: ""
    });

    const { title, description } = groupData;

    const onChange = (e) => {
        setGroupData({
            ...groupData,
            [e.target.name]: e.target.value
        })
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // add group
        addGroup(groupData);
        setGroupData({
            title: "",
            description:""
        });
    };

    return (
        <div id="add-group-modal" className="modal primary">
            <div className="modal-content">
                <h4 className="center-align white-text" style={{fontFamily: "Concert One"}}>Add public Group</h4>
                <br />
                <form onSubmit={onSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="title" type="text" value={title} onChange={onChange} className="white-text" style={{borderBottomColor:'white'}} />
                        <label htmlFor="title" className="active white-text ">Title</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <input name="description" type="text" value={description} onChange={onChange} className="white-text" style={{borderBottomColor:'white'}} />
                        <label htmlFor="description" className="active white-text ">Description</label>
                        </div>
                    </div>

                        <input className="waves-effect waves-light btn white black-text modal-close" 
                            type="submit"
                            value="Create & Join"
                        />
                </form>
            </div>
        </div>
    )
}

export default connect(
    null,
    { addGroup }
)(AddGroupModal);