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

const getWeekDaysArray = (date, startDay) => {
    // get arrays of dates based on today date and week start day
    const today_day_int      = moment(date).day()
    const difference_in_days = today_day_int - startDay
    const week_start_date    = moment(date).subtract(difference_in_days, 'days')
    
    let days = [
        week_start_date,
        week_start_date.clone().add(1, 'days'),
        week_start_date.clone().add(2, 'days'),
        week_start_date.clone().add(3, 'days'),
        week_start_date.clone().add(4, 'days'),
        week_start_date.clone().add(5, 'days'),
        week_start_date.clone().add(6, 'days'),
    ];

    return days
}

const weekControl = props => {
    let activeClass = "  bg-dark text-white shadow-sm"
    
    return <div className="container">
        <div className="row d-flex align-items-center">
            <div className="col-8">
                <div className="py-2">Week {moment(props.activeDate).format('W')}</div>
                <h5>{getWeekDateRange(props.date, props.startDay)}</h5>
            </div>
            <div className="col text-right">
                <button 
                    className="btn btn-light text-dark border bg-white p-1 mr-2"
                    style={{
                        borderRadius: '50%',
                        height: '30px',
                        width: '30px',
                        lineHeight: '1.1rem',
                        paddingRight: '1px'
                    }}><i className="fas fa-chevron-left"></i></button>
                <button 
                    className="btn btn-light text-dark border bg-white p-1 ml-2"
                    style={{
                        borderRadius: '50%',
                        height: '30px',
                        width: '30px',
                        lineHeight: '1.1rem',
                        paddingRight: '1px'
                    }}><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
        <div className="border rounded">
            <div className="d-flex justify-items-center nowrap">
                {
                    getWeekDaysArray(props.date, props.startDay).map((date, index) => (
                        <div 
                            key={index} 
                            className="flex-grow-1 py-1 pb-3 text-center"
                            onClick={() => props.changeActiveDate(date.format('YYYY-MM-DD'))}>
                            <div className="py-1 pb-2"><strong>{date.format('dd')}</strong></div>
                            <div 
                                className={"pt-1 m-auto" + (date.format('YYYY-MM-DD') === props.activeDate ? activeClass : "")}
                                style={
                                    {
                                        borderRadius: '50%', 
                                        height: '30px', 
                                        width: '30px',
                                        textAlign: 'center',
                                        lineHeight: '1.5rem',
                                    }
                                }>{date.format('DD')}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
}

export default weekControl