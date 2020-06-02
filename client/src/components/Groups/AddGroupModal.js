import React from 'react'

const AddGroupModal = () => {
    return (
        <div id="add-group-modal" className="modal" style={{backgroundColor:"rgb(0, 180, 216)"}}>
            <div className="modal-content">
                <h4 className="center-align white-text" style={{fontFamily: "Concert One"}}>Add public Group</h4>
                <br />
                <form>
                    <div className="row">
                        <div className="input-field col s12">
                        <input name="title" type="text" className="white-text" style={{borderBottomColor:'white'}} />
                        <label htmlFor="title" className="active white-text ">Title</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                        <textarea name="description" type="text" className="white-text materialize-textarea" style={{borderBottomColor:'white'}} />
                        <label htmlFor="description" className="active white-text ">Description</label>
                        </div>
                    </div>
                    
                    <div className="modal-footer" style={{backgroundColor:"rgb(0, 180, 216)"}}>
                        <input className="waves-effect waves-light btn white black-text" 
                            type="submit"
                            value="Create & Join"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddGroupModal