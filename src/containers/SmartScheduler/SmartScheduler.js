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
        date: moment().format('YYYY-MM-DD'),
        start_day: 1,
        view: 'month',
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
        activeDate: moment().format('YYYY-MM-DD'),
        activeWeek: {
            week_start_date: null,
            week_end_date: null,
        },
        activeMonth: {
            month: null,
            month_start_date: null,
            month_end_date: null,
        }
    }

    toggleViewHandler = view => {
        if (this.state.view !== view) this.setState({ view })
    }

    backToTodayHandler = () => {
        this.setState({ 
            activeDate: this.state.date,
            activeWeek: this.getWeekDateRange(this.state.date, this.state.startDay),
            activeMonth: this.getMonthDateRange(moment(this.state.date, 'YYYY-MM-DD'))
        })
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

    getMonthDateRange = activeDate => {
        let startDate = activeDate.clone().startOf('month').startOf('week').format('YYYY-MM-DD')
        let endDate   = activeDate.clone().endOf('month').endOf('week').format('YYYY-MM-DD')

        return {
            month: activeDate.format('YYYY-MM'),
            month_start_date: startDate,
            month_end_date: endDate
        }
    }

    changeToNextMonthHandler = () => this.setState({ activeMonth: this.getMonthDateRange(moment(this.state.activeMonth.month, 'YYYY-MM').add(1, 'month')) })
    changeToPrevMonthHandler = () => this.setState({ activeMonth: this.getMonthDateRange(moment(this.state.activeMonth.month, 'YYYY-MM').subtract(1, 'month'))})

    componentDidMount = () => {
        let activeMonth = this.getMonthDateRange(moment(this.state.activeDate, 'YYYY-MM-DD'))
        let activeWeek = this.getWeekDateRange(this.state.date, this.state.start_day)
        this.setState({ activeWeek, activeMonth })
        // let activeMonth = this.getMonthRange(this.state.date)
    }

    render() { 
        let view = this.state.view === 'week'
            ? <div>
                <WeekCalendar 
                    date={this.state.date}
                    activeDate={this.state.activeDate}
                    activeWeek={this.state.activeWeek}
                    startDay={this.state.start_day}
                    backToToday={this.backToTodayHandler}
                    changeActiveDate={this.changeActiveDateHandler}
                    changeToNextWeek={this.changeToNextWeekHandler}
                    changeToPrevWeek={this.changeToPrevWeekHandler} />
                <TotalHours />
            </div>
            : this.state.view === 'month'
            ? <MonthCalendar
                date={this.state.date}
                activeDate={this.state.activeDate}
                activeMonth={this.state.activeMonth}
                startDay={this.state.start_day}
                backToToday={this.backToTodayHandler}
                changeActiveDate={this.changeActiveDateHandler}
                changeToNextMonth={this.changeToNextMonthHandler}
                changeToPrevMonth={this.changeToPrevMonthHandler} />
            : null
            
        return (
            <div>
                <TodayDate todayDate={this.state.date} activeDate={this.state.activeDate} />
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