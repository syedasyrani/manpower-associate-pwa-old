import React from 'react'
import moment from 'moment'

const todayDate = props => (
    <div className="container py-4 border-bottom">
        Today
        <h5>{moment(props.date).format('ddd, D MMMM YYYY')}</h5>
    </div>
)

export default todayDate