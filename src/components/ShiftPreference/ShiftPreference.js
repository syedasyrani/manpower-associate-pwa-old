import React, { Component } from 'react'
import moment from 'moment'

class ShiftPreference extends Component {
    state = {
        selected: []
    }

    isSelected     = shift_id => this.state.selected.some(id => id === shift_id)
    addSelected    = shift_id => {
        const selected = [...this.state.selected]
        selected.push(shift_id)
        this.setState({ selected })
    }
    removeSelected = shift_id => {
        const selected = this.state.selected.filter(id => id !== shift_id)
        this.setState({ selected })
    }
   
    convert24HrTo12Hr     = time     => moment(time, 'HH:mm').format('hh:mma')
    disablePreferenceBtn  = shift_id => this.props.shifts.preferred.find(shift => shift.id === shift_id) ? true : false
    togglePreferenceBtn   = shift_id => this.isSelected(shift_id) ? this.removeSelected(shift_id) : this.addSelected(shift_id)

    render() { 
        return (
            <div className="container pb-3">
                <div className="container border rounded pb-2">
                    <h6 className="py-2">Your Preferred Shift</h6>
                    { 
                        this.props.shifts.preferred.map(shift => (
                            <button 
                                key={shift.id}
                                className="btn btn-danger btn-block py-1 text-left rounded">
                                {`${shift.name} (${this.convert24HrTo12Hr(shift.start_time)} - ${this.convert24HrTo12Hr(shift.end_time)})`}
                            </button>
                        )) 
                    }
                    <h6 className="py-2">Reselect Shifts</h6>
                    { 
                        this.props.shifts.all.map(shift => (
                            <button 
                                key={shift.id} 
                                className={"btn btn-light btn-block py-1 text-left rounded" + ((this.isSelected(shift.id)) ? " btn-dark" : "")}
                                disabled={this.disablePreferenceBtn(shift.id)}
                                onClick={() => this.togglePreferenceBtn(shift.id)}>
                                    {`${shift.name} (${this.convert24HrTo12Hr(shift.start_time)} - ${this.convert24HrTo12Hr(shift.end_time)})`}
                            </button>
                        )) 
                    }
                    <button 
                        disabled={this.state.selected.length === 0}
                        className="btn btn-light btn-block my-4 rounded">
                        Confirm shift
                    </button>
                </div>
            </div>
        )
    }
}
 
export default ShiftPreference