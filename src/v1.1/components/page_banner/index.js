import React, { Component } from 'react'
//
import './style.sass'

export default class PageBanner extends Component {
  render() {
    const { title, backgroundColor } = this.props

    return (
      <div className="pageBanner">
        <div className="pageBanner__wrap">
          <h1 className="pageBanner__title">{title}</h1>
        </div>
      </div>
    )
  }
}
