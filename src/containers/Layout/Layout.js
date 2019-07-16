import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

class Layout extends Component {
    state = {
        sidebarItems: [
            {title: 'Home'},
            {title: 'Smart Scheduler'},
            {title: 'Communication'},
            {title: 'Rewards'},
            {title: 'Feedback'},
            {title: 'Events'},
            {title: 'eDocs'},
        ],
        sidebarActive: false
    }

    sidebarToggleHandler = () => this.setState({ sidebarActive: !this.state.sidebarActive })
    
    render() { 
        let sidebar = null

        if (this.state.sidebarActive === true)
            sidebar = <Sidebar items={this.state.sidebarItems} />

        return <div>
            <Navbar sidebarToggler={this.sidebarToggleHandler} />
            { sidebar }
            { this.props.children }
        </div>
    }
}
 
export default Layout