import React, { Component } from 'react'
import { Link } from 'react-static'
import classNames from 'classnames'
//
import { genRandomKey } from '../../utils'
//
import './style.sass'

export default class MainNav extends Component {
  items = [
    {
      name: 'How it Works',
      link: '/how-it-works/',
    },
    {
      name: 'Safecoin',
      link: '/safecoin/',
    },
    {
      name: 'Timeline',
      link: '/timeline/',
    },
    {
      name: 'Fundamentals',
      link: '/fundamentals/',
    },
    {
      name: 'FAQs',
      link: '/faq/',
    },
    {
      name: 'Press Kit',
      link: '/press-kit/',
    },
  ]

  itemButton = {
    name: 'Get Involved',
    link: '/get-involved/',
  }

  render() {
    const { location } = this.props
    const isLightTheme = (location.pathname === '/get-involved/')

    return (
      <div className={classNames('mainNav', {
        light: isLightTheme
      })}>
        <div className="mainNav__wrap">
          {
            this.items.map(i => (
              <div
                key={genRandomKey()}
                className={classNames('mainNav__item', {
                  active: (i.link === location.pathname),
                })}
              >
                <Link to={i.link.trim() || '#'}>{i.name}</Link>
              </div>
            ))
          }
          <div
            className={classNames('mainNav__item-btn', {
              active: (this.itemButton.link === location.pathname),
            })}
          >
            <Link to={this.itemButton.link.trim() || '#'}>{this.itemButton.name}</Link>
          </div>
        </div>
      </div>
    )
  }
}
