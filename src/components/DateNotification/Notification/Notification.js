import React from 'react'
import moment from 'moment'

const notification = props => (
    <div className="border-bottom">
        <div className="container row w-100 ml-0 p-2 d-flex align-items-center justify-items-center">
            <div className="col-2">
                <input type="radio" disabled checked={!props.notification.is_read} />
            </div>
            <div className="col-10">
                <div><strong>{props.notification.title}</strong></div>
                <div>{props.notification.body}</div>
                <div className="pt-2">
                    <small>{moment(props.notification.createdAt).format('LT')}</small>
                </div>
            </div>
        </div>
    </div>
)

export default notification