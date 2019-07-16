import React, { Component } from 'react'
import moment from 'moment'

import Date from '../../components/Date/Date'
import WeekMonthControl from '../../components/WeekMonthControl/WeekMonthControl'
import WeekCalendar from '../../components/WeekCalendar/WeekCalendar'
import MonthCalendar from '../../components/MonthCalendar/MonthCalendar'
import TotalHours from '../../components/TotalHours/TotalHours'
import ShiftPreference from '../../components/ShiftPreference/ShiftPreference'

class SmartScheduler extends Component {
    state = {
        date: moment().format(),
        start_day: 1,
        view: 'week'
    }

    render() { 
        return <div>
            <Date date={this.state.date} />
            <WeekMonthControl view={this.state.view} />
            { 
                this.state.view === 'week'
                    ? <div>
                        <WeekCalendar startDay={this.state.start_day} />
                        <TotalHours />
                      </div>
                    : this.state.view === 'month'
                    ? <MonthCalendar />
                    : null
            }
            <ShiftPreference />
        </div>
    }
}
 
export default SmartScheduler