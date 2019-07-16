import React from 'react'

const weekControl = props => (
    <div className="bg-light py-2">
        <div className="row w-100 ml-0 d-flex align-items-center justify-content-center">
            <div className="col-2 text-left">
                <button className="btn btn-light"><i className="fas fa-chevron-left" /></button>
            </div>
            <div className="text-center col-8"><strong>Week {props.currentTime.week()}</strong></div>
            <div className="col-2 text-right">
                <button className="btn btn-light"><i className="fas fa-chevron-right" /></button>
            </div>
        </div>
    </div>
)

export default weekControl

