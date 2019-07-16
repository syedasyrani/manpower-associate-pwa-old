import React from 'react'

const profileDetail = props => (
    <div className="container py-3">
        <h5 
            className="text-dark"
            style={{fontWeight: 'normal'}}>
            Personal Information</h5>

        <div className="container border rounded py-3">
            <h5>Email</h5>
            <p>{props.user.email}</p>
            <h5>Phone No.</h5>
            <p>{props.user.phone_no}</p>
        </div>
    </div>
)

export default profileDetail