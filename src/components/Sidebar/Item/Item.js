import React from 'react'

const item = props => (
    <a href="#" className="list-group-item list-group-item-action bg-light">{props.item.title}</a>
)

export default item