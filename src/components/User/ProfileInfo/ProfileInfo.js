import React from 'react'

const profileInfo = props => (
    <div className="container py-3 d-flex align-items-center">
        <img 
            className="img-responsive mr-3"
            style={{height: '100px', width: '100px'}}
            src={props.user.image} 
            alt=""/>
        <span>
            <h5>{props.user.first_name} {props.user.last_name}</h5>
            <p>{props.user.employee_no}</p>
        </span>
    </div>
)

export default profileInfo