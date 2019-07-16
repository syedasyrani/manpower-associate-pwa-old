import React from 'react'
import styles from './Sidebar.css'

import Item from './Item/Item'

const sidebar = props => (
    <div className={styles['Sidebar'] + " bg-light border-right"}>
        <div className={styles['sidebar-heading']}>Logo</div>
        <div className={styles['list-group'] + ' ' + styles['list-group-flush']}>
            { props.items.map(item => <Item item={item} />) }
        </div>
    </div>
)
 
export default sidebar