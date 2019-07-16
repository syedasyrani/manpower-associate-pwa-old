import React from 'react'

const performanceScore = props => (
    <div className="container py-2">
        <h5 style={{fontWeight: 'normal'}}>Performance Score</h5>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Weightage</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                { props.scores.map((score, index) => {
                    return <tr key={index}>
                        <td>{score.title}</td>
                        <td className="text-center">{score.weighted}%</td>
                        <td className="text-center">{score.score}%</td>
                    </tr>
                }) }
                <tr>
                    <td colSpan="2" className="text-right">Overall</td>
                    <td className="text-center">{props.overallScore}%</td>
                </tr>
            </tbody>
        </table>
    </div>
)

export default performanceScore