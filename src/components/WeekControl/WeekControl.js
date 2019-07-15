import React from 'react'

const weekControl = props => (
    <div className="text-center bg-light py-2">
        <div className="row d-flex align-items-center justify-content-center">
            <div>
                <button className="btn btn-light"><i className="fas fa-chevron-left" /></button>
            </div>
            <div className="text-center col-8"><strong>Week {props.currentTime.week()}</strong></div>
            <div>
                <button className="btn btn-light"><i className="fas fa-chevron-right" /></button>
            </div>
        </div>
    </div>
)

export default weekControl

