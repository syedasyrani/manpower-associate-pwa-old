import React from 'react'
import WeekControl from './WeekControl/WeekControl'
const weekCalendar = props => (
    <div className="container">
        <WeekControl date={props.date} startDay={props.startDay} />
    </div>
)

export default weekCalendar