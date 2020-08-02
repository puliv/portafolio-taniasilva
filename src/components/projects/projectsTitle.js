import React, { Component } from 'react'

export class projectsTitle extends Component {
  render() {
    const { title, image } = this.props
    return (
      <div className="titles">
        <div className="title-img">
          <img src={image} alt="title" />
        </div>
        <div className="title-h2">
          <h2>{title}</h2>
        </div>
      </div>
    )
  }
}

export default projectsTitle
