import React, { Component } from 'react'

import TodayDate from '../../components/TodayDate/TodayDate'
import WeekMonthControl from '../../components/WeekMonthControl/WeekMonthControl'
import WeekCalendar from '../../components/WeekCalendar/WeekCalendar'
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar'
import TotalHours from '../../components/TotalHours/TotalHours'
import ShiftPreference from '../../components/ShiftPreference/ShiftPreference'

class SmartScheduler extends Component {
    state = {
        date: '2019-01-01',
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
        }
    }

    toggleViewHandler = view => {
        if (this.state.view !== view) this.setState({ view })
    }

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
                            startDay={this.state.start_day} />
                        <TotalHours />
                      </div>
                    : this.state.view === 'month'
                    ? <MonthCalendar />
                    : null
            }
            <ShiftPreference shifts={this.state.shifts} />
        </div>
    }
}
 
export default SmartScheduler