import React from 'react'

const weekSchedule = props => (
    <div className="container py-3">
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Shift</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sunday</td>
                        <td>S1</td>
                    </tr>
                    <tr>
                        <td>Monday</td>
                        <td>S1</td>
                    </tr>
                    <tr>
                        <td>Tuesday</td>
                        <td>S1</td>
                    </tr>
                    <tr>
                        <td>Wednesday</td>
                        <td>S1</td>
                    </tr>
                    <tr>
                        <td>Thursday</td>
                        <td>S1</td>
                    </tr>
                    <tr>
                        <td>Friday</td>
                        <td>S1</td>
                    </tr>
                    <tr>
                        <td>Saturday</td>
                        <td>S1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)

export default weekSchedule