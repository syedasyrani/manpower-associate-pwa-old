import React, { Component } from 'react'
import styles from './Navbar.css'

class Navbar extends Component {
    render() { 
        return <nav className={styles.Navbar + " navbar navbar-light bg-light"}>
        <span className="navbar-brand mb-0 h1">Navbar</span>
      </nav>
    }
}
 
export default Navbar;