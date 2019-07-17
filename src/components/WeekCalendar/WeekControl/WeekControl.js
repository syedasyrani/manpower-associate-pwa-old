import React from 'react'
import moment from 'moment'

const getWeekDateRange = (date, startDay) => {
    const today_day_int      = moment(date).day()
    const difference_in_days = today_day_int - startDay
    const week_start_date    = moment(date).subtract(difference_in_days, 'days')
    const week_end_date      = moment(week_start_date.format('YYYY-MM-DD')).add(6, 'days')

    const weekString = `${week_start_date.format('DD')}-${week_end_date.format('DD MMMM YYYY')}`

    return weekString
}

const weekControl = props => {
    
    return <div className="py-2 pt-3">
        <div>Week {moment(props.date).format('W')}</div>
        <h5>{getWeekDateRange(props.date, props.startDay)}</h5>
        <div className="container border rounded">
            
        </div>
    </div>
}

export default weekControl