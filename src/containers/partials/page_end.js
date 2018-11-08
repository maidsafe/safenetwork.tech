import React from 'react'
import Classnames from 'classnames'

import EmailSignUp from './email_signup';

import CONST from '../../constants';

export default class PageEnd extends React.Component {
  render() {
    return (
      <div className={Classnames('page-end', {
        light: this.props.light
      })}>
        <div className="page-end-b">
          <div className="page-end-sec lft">
            <div className="lft-sec">
              <EmailSignUp />

            </div>
          </div>
          <div className="page-end-sec rgt">
            <div className="rgt-sec">
              <div className="rgt-sec-b">
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.hiw}>How it Works</a></div>
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.faq}>FAQ</a></div>
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.safecoins}>Safecoin</a></div>
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.getInv}>Get Involved</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
