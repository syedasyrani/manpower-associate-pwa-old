import React, { Component } from 'react'
import styles from './Navbar.css'

class Navbar extends Component {
    render() { 
        return <nav className={styles.Navbar + " navbar bg-white align-center border-bottom"}>
          <i className="fas fa-bars"></i>
          <h1 className="navbar-brand mb-0">Amazon <span className="pl-1" style={{color: '#aaa'}}>USG1</span></h1>
          
          <span className="navbar-text d-flex align-center">
            <i className="far fa-bell px-3" style={{color: '#aaa',fontSize: '1.5rem'}}></i>
            <img 
              src="https://t3.ftcdn.net/jpg/00/64/67/80/240_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.jpg" 
              alt="default"
              className="rounded-circle border"
              style={{height: '25px', width: '25px'}} />
          </span>
      </nav>
    }
}
 
export default Navbar;