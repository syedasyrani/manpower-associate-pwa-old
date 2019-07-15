import React from 'react'

const jumbotron = props => (
    <div className="jumbotron rounded-0 mb-0">
        <h3>{props.greeting(props.currentTime)},</h3>
        <h3 className="mb-4">John Doe</h3>
        <p className="lead">{props.currentTime.format('ddd, DD MMMM YYYY')}</p>
    </div>
)

export default jumbotron