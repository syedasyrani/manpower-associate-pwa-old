import React, { Component } from 'react'
import moment from 'moment'

import TodayDate from '../../components/TodayDate/TodayDate'
import WeekMonthControl from '../../components/WeekMonthControl/WeekMonthControl'
import WeekCalendar from '../../components/WeekCalendar/WeekCalendar'
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar'
import TotalHours from '../../components/TotalHours/TotalHours'
import ShiftPreference from '../../components/ShiftPreference/ShiftPreference'

class SmartScheduler extends Component {
    state = {
        date: moment('2019-01-01', 'YYYY-MM-DD').format('YYYY-MM-DD'),
        start_day: 1,
        view: 'week',
        shifts: {
            preferred: [
                { id: 2, name: 'Shift 2', start_time: '12:30', end_time: '16:30'},
            ],
            all: [
                { id: 1, name: 'Shift 1', start_time: '07:30', end_time: '1230'},
                { id: 2, name: 'Shift 2', start_time: '12:30', end_time: '16:30'},
                { id: 3, name: 'Shift 3', start_time: '16:30', end_time: '21:00'},
            ]
        },
        activeDate: moment('2019-01-01', 'YYYY-MM-DD').format('YYYY-MM-DD'),
        activeWeek: {
            start_date: moment('2018-12-31', 'YYYY-MM-DD').format('YYYY-MM-DD'),
            end_date: moment('2019-01-06', 'YYYY-MM-DD').format('YYYY-MM-DD'),
        }
    }

    toggleViewHandler = view => {
        if (this.state.view !== view) this.setState({ view })
    }

    getWeekDateRange = (date, startDay) => {
        const today_day_int      = moment(date).day()
        const difference_in_days = today_day_int - startDay
        const week_start_date    = moment(date).subtract(difference_in_days, 'days')
        const week_end_date      = moment(week_start_date.format('YYYY-MM-DD')).add(6, 'days')
    
        return {
            week_start_date: week_start_date.format('YYYY-MM-DD'),
            week_end_date: week_end_date.format('YYYY-MM-DD'),
        }
    }

    changeActiveDateHandler = date => this.setState({activeDate: date})
    changeActiveWeekHandler = date => this.setState({activeDate: date})

    render() { 
        return <div>
            <TodayDate date={this.state.date} />
            <WeekMonthControl 
                active={this.state.view}
                toggleView={this.toggleViewHandler} />
            { 
                this.state.view === 'week'
                    ? <div>
                        <WeekCalendar 
                            date={this.state.date}
                            activeDate={this.state.activeDate}
                            activeWeek={this.state.activeWeek}
                            startDay={this.state.start_day}
                            changeActiveDate={this.changeActiveDateHandler} />
                        <TotalHours />
                      </div>
                    : this.state.view === 'month'
                    ? <MonthCalendar />
                    : null
            }
            <ShiftPreference 
                activeDate={this.state.activeDate} 
                shifts={this.state.shifts} />
        </div>
    }
}
 
export default SmartScheduler