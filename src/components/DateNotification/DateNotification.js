import React from 'react'

import Notification from './Notification/Notification'
import moment from 'moment'

const dateNotification = props => (
    <div>
        <div className="container border-bottom">
            <h6 className="pt-4">
                {
                    (props.date === moment(Date.now()).format('D MMMM YYYY'))
                        ? 'Today'
                        : props.date
                }
            </h6>
        </div>
        {
            props.notifications.map(notification => (
                <Notification 
                    key={notification.id} 
                    notification={notification} />
            ))
        }
    </div>
)

export default dateNotification