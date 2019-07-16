import React, { Component } from 'react'

import ProfileInfo from '../../components/User/ProfileInfo/ProfileInfo'
import ProfileDetail from '../../components/User/ProfileDetail/ProfileDetail'
import PerformanceScore from '../../components/User/PerformanceScore/PerformanceScore'

import ProfileSetting from './ProfileSetting/ProfileSetting'

class Profile extends Component {
    state = {
        user: {
            first_name: 'John',
            last_name:  'Doe',
            image: 'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1',
            employee_no: '#ID101010',
            email: 'john_f_doe@gmail.com',
            phone_no: '+65 9010 2101'
        },
        scores: [
            { title: 'Attendance Rate', weighted: 35, score: 72 },
            { title: 'Fill Rate', weighted: 35, score: 60 },
            { title: 'Pick Rate', weighted: 30, score: 80 }
        ],
        overallScore: 70.2,
        setting: true
    }
    render() { 
        return this.state.setting
        ?   <ProfileSetting 
                user={this.state.user} />
        :   <div>
                <ProfileInfo user={this.state.user} />
                <ProfileDetail user={this.state.user} />
                <PerformanceScore 
                    scores={this.state.scores} 
                    overallScore={this.state.overallScore} />
            </div>
    }
}
 
export default Profile