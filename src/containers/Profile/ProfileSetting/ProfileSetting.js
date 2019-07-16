import React, { Component } from 'react'

class ProfileSetting extends Component {
    render() { 
        return <div className="container py-3">
            <div className="text-center">
                <img 
                    src={this.props.user.image} 
                    alt=""
                    style={{height: '150px', width: '150px'}}/>
            </div>
            <div className="text-center py-3">
                <a href="https://www.google.com/" className="text-dark">Change Profile Photo</a>
            </div>
            <div className="container">
                <label htmlFor="" className="my-2"><h6>First Name</h6></label>
                <input className="form-control rounded" type="text" value={this.props.user.first_name} />
                <label htmlFor="" className="my-2"><h6>Last Name</h6></label>
                <input className="form-control rounded" type="text" value={this.props.user.last_name} />
                <label htmlFor="" className="my-2"><h6>Associate ID</h6></label>
                <input className="form-control rounded" type="text" value={this.props.user.employee_no} />
                <label htmlFor="" className="my-2"><h6>Email</h6></label>
                <input className="form-control rounded" type="text" value={this.props.user.email} />
                <label htmlFor="" className="my-2"><h6>Phone Number</h6></label>
                <input className="form-control rounded" type="text" value={this.props.user.phone_no} />
                <button className="btn btn-lg btn-primary btn-block mt-4">Save Changes</button>
            </div>
        </div>
    }
}
 
export default ProfileSetting;