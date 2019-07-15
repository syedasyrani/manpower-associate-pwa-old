import React, { Component } from 'react'
import moment from 'moment'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import WeekControl from '../../components/WeekControl/WeekControl'
import WeekSchedule from '../../components/WeekSchedule/WeekSchedule'

class Home extends Component {
    state = { 
        currentTime: moment(Date.now())
    }

    updateTime = () => setInterval(() => this.setState({currentTime: moment(Date.now())}), 1000)

    greetingHandler = time => {
        if (!time || !time.isValid()) { return 'Hello'; }
      
        const splitAfternoon = 12; // 24hr time to split the afternoon
        const splitEvening = 17; // 24hr time to split the evening
        const currentHour = parseFloat(time.format('HH'));
      
        if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
          // Between 12 PM and 5PM
          return 'Good afternoon';
        } else if (currentHour >= splitEvening) {
          // Between 5PM and Midnight
          return 'Good evening';
        }
        // Between dawn and noon
        return 'Good morning';
    }

    componentDidMount() {
        this.updateTime()
    }

    render() { 
        return <div>
            <Jumbotron 
                currentTime={this.state.currentTime} 
                greeting={this.greetingHandler} />
            <WeekControl 
                currentTime={this.state.currentTime} />
            <WeekSchedule />
        </div>
    }
}
 
export default Home