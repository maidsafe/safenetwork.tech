import React from 'react'
import Classnames from 'classnames'

import CONST from '../../constants';

export default class PageEnd extends React.Component {
  render() {
    return (
      <section className={Classnames('page-end', {
        light: this.props.light
      })}>
        <div className="page-end-b">
          <div className="page-end-sec lft">
            <div className="lft-sec">
              <div className="lft-sec-b">
                <p className="lft-sec-p">The countdown to the new Internet has begun.  Try, test, build, contribute. Be part of it.</p>
                <p className="lft-sec-btn">
                  <button className="btn" type="button" onClick={() => {
                    location.assign(CONST.links.pages.getInv);
                  }}>Get Involved</button>
                </p>
              </div>
            </div>
          </div>
          <div className="page-end-sec rgt">
            <div className="rgt-sec">
              <div className="rgt-sec-b">
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.hiw}>How it Works</a></div>
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.faq}>FAQ</a></div>
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.safecoins}>Safecoin</a></div>
                <div className="rgt-sec-i"><a className="lnk-underline grey" href={CONST.links.pages.pKit}>Press Kit</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
