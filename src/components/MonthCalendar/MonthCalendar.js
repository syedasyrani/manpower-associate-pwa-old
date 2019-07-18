import React from 'react'
import moment from 'moment'


const getMonthDatesArray = (startDate, stopDate) => {
    var dateArray = [];
    var currentDate = moment(startDate, 'YYYY-MM-DD');
    var stopDate = moment(stopDate, 'YYYY-MM-DD');
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate) )
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}

const monthCalendar = props => {
    let activeClass = "  bg-dark text-white shadow-sm"
    return <div className="container">
        <div className="row d-flex align-items-center">
            <div className="col-8">
                <div className="py-2">{moment(props.activeMonth.month, 'YYYY-MM').format('MMMM')}</div>
                <h5>{moment(props.activeDate, 'YYYY-MM-DD').format('DD MMMM YYYY')}</h5>
            </div>
            <div className="col text-right">
                <button 
                    className="btn btn-light text-dark border bg-white p-1 mr-2"
                    onClick={() => props.changeToPrevMonth(props.activeMonth.month_start_date, props.activeMonth.month_end_date)}
                    style={{
                        borderRadius: '50%',
                        height: '25px',
                        width: '25px',
                        lineHeight: '1.1rem'
                    }}><i className="fas fa-chevron-left"></i></button>
                    <button
                        className="btn btn-light text-dark border bg-white p-1"
                        onClick={() => props.backToToday()}
                        style={{
                            borderRadius: '50%',
                            height: '25px',
                            width: '25px',
                            lineHeight: '1.1rem'
                        }}>
                        <i className="far fa-circle"></i>
                    </button>
                <button 
                    className="btn btn-light text-dark border bg-white p-1 ml-2"
                    onClick={() => props.changeToNextMonth(props.activeMonth.month_start_date, props.activeMonth.month_end_date)}
                    style={{
                        borderRadius: '50%',
                        height: '25px',
                        width: '25px',
                        lineHeight: '1.1rem'
                    }}><i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
        <div className="border rounded mb-3">
            <h6 className="text-center pt-3">{moment(props.activeMonth.month).format('MMMM, YYYY')}</h6>
            <div className="d-flex justify-items-center flex-wrap">
                <div className="flex-grow-1 pb-3 text-center font-weight-bold" style={{flex: '0 13%'}}>Mo</div>
                <div className="flex-grow-1 pb-3 text-center font-weight-bold" style={{flex: '0 13%'}}>Tu</div>
                <div className="flex-grow-1 pb-3 text-center font-weight-bold" style={{flex: '0 13%'}}>We</div>
                <div className="flex-grow-1 pb-3 text-center font-weight-bold" style={{flex: '0 13%'}}>Th</div>
                <div className="flex-grow-1 pb-3 text-center font-weight-bold" style={{flex: '0 13%'}}>Fr</div>
                <div className="flex-grow-1 pb-3 text-center font-weight-bold" style={{flex: '0 13%'}}>Sa</div>
                <div className="flex-grow-1 pb-3 text-center font-weight-bold" style={{flex: '0 13%'}}>Su</div>
                { 
                    getMonthDatesArray(props.activeMonth.month_start_date, props.activeMonth.month_end_date).map((date, index) => (
                        <div 
                            key={index} 
                            className="flex-grow-1 pb-3 text-center"
                            onClick={() => props.changeActiveDate(date.format('YYYY-MM-DD'))}
                            style={{flex: '0 13%'}}>
                            <div 
                                className={"pt-1 m-auto" + (date.format('YYYY-MM-DD') === props.activeDate ? activeClass : "")}
                                style={
                                    {
                                        borderRadius: '50%', 
                                        height: '30px', 
                                        width: '30px',
                                        textAlign: 'center',
                                        lineHeight: '1.5rem',
                                    }
                                }>{date.format('DD')}</div>
                        </div>
                    )) 
                }
            </div>
        </div>
    </div>
}

export default monthCalendar