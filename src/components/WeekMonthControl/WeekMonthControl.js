import React from 'react'

const weekMonthControl = props => {
    let toggleClass = 'col-6 py-3 '
    let activeClass = 'font-weight-bold'

    let weekClass = props.active === 'week' ? toggleClass + activeClass : toggleClass
    let monthClass = props.active === 'month' ? toggleClass + activeClass : toggleClass

    return (
        <div className="d-flex text-center border-bottom">
            <div 
                className={weekClass + " flex-grow-1"}
                onClick={() => props.toggleView('week')}>
                Week
            </div>
            <div 
                className={monthClass + " flex-grow-1"}
                onClick={() => props.toggleView('month')}>
                Month
            </div>
        </div>
    )
}

export default weekMonthControl