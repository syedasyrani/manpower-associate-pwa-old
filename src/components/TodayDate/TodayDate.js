import React from 'react'
import moment from 'moment'

const todayDate = props => {
    const activeDateWeek = props.activeDate === props.todayDate
        ? 'Today' 
        : 'Week ' + moment(props.activeDate,' YYYY-MM-DD').format('W')

    return <div className="container py-4 border-bottom">
        {activeDateWeek}
        <h5>{moment(props.activeDate,' YYYY-MM-DD').format('ddd, D MMMM YYYY')}</h5>
    </div>
}

export default todayDate