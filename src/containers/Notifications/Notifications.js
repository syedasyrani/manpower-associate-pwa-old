import React, { Component } from 'react'
import moment from 'moment'
import DateNotification from '../../components/DateNotification/DateNotification'

class Notification extends Component {
    state = {
        notifications: [
            {
                date: moment(Date.now()).format('D MMMM YYYY'),
                data: [
                    { 
                        id: 1,
                        is_read: false,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                    { 
                        id: 2,
                        is_read: false,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                    { 
                        id: 3,
                        is_read: false,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                    { 
                        id: 4,
                        is_read: false,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                ]
            },
            {
                date: moment(Date.now()).subtract(1, "days").format('D MMMM YYYY'),
                data: [
                    { 
                        id: 5,
                        is_read: true,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).subtract(1, "days").format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                    { 
                        id: 6,
                        is_read: true,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).subtract(1, "days").format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                    { 
                        id: 7,
                        is_read: true,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).subtract(1, "days").format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                    { 
                        id: 8,
                        is_read: true,
                        title: 'Title', 
                        body: 'Body', 
                        date: moment(Date.now()).format('D MMMM YYYY'),
                        createdAt: Date.now()
                    },
                ]
            },
        ]
    }
    
    render() { 
        return <div>
            {
                this.state.notifications.map(notification => (
                    <DateNotification 
                        key={notification.date} 
                        date={notification.date} 
                        notifications={notification.data} />
                ))
            }
        </div>
    }
}
 
export default Notification