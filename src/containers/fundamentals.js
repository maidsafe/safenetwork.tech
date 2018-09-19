import React from 'react'
import { withSiteData, Head } from 'react-static'
//
import fundamentals from '../content/fundamentals.json';
import PageEnd from './partials/page_end';
import FundamentalItem from './partials/fundamental_item';
import FundamentalPara from './partials/fundamental_para';
import CONST from '../constants';
import {getAppLink} from '../utils';


// Fundamentals page
class Fundamentals extends React.Component {
  constructor() {
    super();
    this.fundamentals = fundamentals;
  }
  componentDidMount() {
    const hash = location.hash;
    if(hash) {
      const ele = decodeURIComponent(location.hash);
      if (!ele) {
        return;
      }
      const targetEle = document.getElementById(ele.substr(1));
      if (!targetEle) {
        return;
      }
      targetEle.click();
    }
  }
  render() {
    return (
      <section className="funda">
        <Head>
          <title>{CONST.meta.fundamentals.title}</title>
          <meta name="description" content={CONST.meta.fundamentals.desc} />
        </Head>
        <div className="funda-b">
          <div className="funda-h header-adjust"><h1 className="funda-h-i bnr-head">Network Fundamentals</h1></div>
          <div className="funda-bnr">
            <div className="funda-bnr-b">
              <p className="bnr-para">There are certain concepts that have driven every stage of the design of the Network ever since the project started in 2006. Since that time, the SAFE community has grown and we’re delighted to see just how many people and projects have come to recognise the vital importance of a global, secure and private decentralised platform for storage and communication.</p>
            </div>
          </div>
          <div className="funda-cntr">
            <div className="funda-cntr-b">
              {
                [
                  <FundamentalItem key={`funda-item-${this.fundamentals[0].title}`} data={this.fundamentals[0]} /> ,
                  <FundamentalPara key={`funda-item-${this.fundamentals[1].title}`} data={this.fundamentals[1]} />
                ]
              }
            </div>
          </div>
        </div>
        <PageEnd />
      </section>
    );
  }
}

export default withSiteData(() => (
  <Fundamentals />
));
