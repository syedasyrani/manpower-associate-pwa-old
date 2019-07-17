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
            week_start_date: null,
            week_end_date: null,
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

    getWeekDaysArray = (date, startDay) => {
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

    changeActiveDateHandler = date => this.setState({activeDate: date})

    changeToNextWeekHandler = (weekStartDate, weekEndDate) => {
        const newWeekStart = moment(weekStartDate, 'YYYY-MM-DD').add(7, 'days').format('YYYY-MM-DD')
        const newWeekEnd   = moment(weekEndDate, 'YYYY-MM-DD').add(7, 'days').format('YYYY-MM-DD')
        this.setState({
            activeWeek: {
                week_start_date: newWeekStart,
                week_end_date: newWeekEnd
            }
        })
    }

    changeToPrevWeekHandler = (weekStartDate, weekEndDate) => {
        const newWeekStart = moment(weekStartDate, 'YYYY-MM-DD').subtract(7, 'days').format('YYYY-MM-DD')
        const newWeekEnd   = moment(weekEndDate, 'YYYY-MM-DD').subtract(7, 'days').format('YYYY-MM-DD')
        this.setState({
            activeWeek: {
                week_start_date: newWeekStart,
                week_end_date: newWeekEnd
            }
        })
    }

    componentDidMount = () => {
        let activeWeek = this.getWeekDateRange(this.state.date, this.state.start_day)
        this.setState({ activeWeek })
    }

    render() { 
        let view = this.state.view === 'week'
            ? <div>
                <WeekCalendar 
                    date={this.state.date}
                    activeDate={this.state.activeDate}
                    activeWeek={this.state.activeWeek}
                    startDay={this.state.start_day}
                    changeActiveDate={this.changeActiveDateHandler}
                    changeToNextWeek={this.changeToNextWeekHandler}
                    changeToPrevWeek={this.changeToPrevWeekHandler} />
                <TotalHours />
            </div>
            : this.state.view === 'month'
            ? <MonthCalendar />
            : null
            
        return (
            <div>
                <TodayDate date={this.state.activeDate} />
                <WeekMonthControl 
                    active={this.state.view}
                    toggleView={this.toggleViewHandler} />
                { view }
                <ShiftPreference 
                    activeDate={this.state.activeDate} 
                    shifts={this.state.shifts} />
            </div>
        )
    }
}
 
export default SmartScheduler