import React from 'react'

const Profile = (props) => {
    return(
        <div className="gadget col-12 col-lg-6 mb-4 mb-lg-5">
            <div className="card card-secondary">

                <div className="card-header text-center">
                    <span className="icon icon-xs w95-window-empty"></span>
                        User Profile
                    <button className="close-btn" onClick= {props.removeProfile}> X </button>
                </div>

                <div className="card-body" >
                    <p className="card-text">Welcome, {props.user.username}!</p>

                    <div className="form-group d-flex align-items-center justify-content-between">
                        <label htmlFor="disabled" className="mr-3">User:</label>
                        <input type="text" className="form-control w-75" value={props.user.username} placeholder={props.user.username} disabled />
                    </div>

                    <div className="form-group d-flex align-items-center justify-content-between">
                        <label htmlFor="disabled" className="mr-3">E-Mail:</label>
                        <input type="text" className="form-control w-75" value={props.user.email} placeholder={props.user.email} disabled />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile