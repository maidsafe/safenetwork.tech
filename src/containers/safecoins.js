import React from 'react'
import { withSiteData, Head } from 'react-static'
import ClassNames from 'classnames';
//
// import YouTubeWarn from './partials/youtube_warn';
import CustomVideo from './partials/custom_video';
import FAQItem from './partials/faq_item';
import PageEnd from './partials/page_end';
import CONST from '../constants';
import faq from '../content/safecoins_faq.json';

import Openledger from '../assets/images/openledger.png';
import Hitbtc from '../assets/images/hitbtc.png';
import Poloniex from '../assets/images/poloniex.png';
import Cryptopia from '../assets/images/cryptopia.png';

const getWindowWidth = () => {
  if (typeof window === 'undefined') return 0
  return window.screen.width;
}

class Banner extends React.Component {
  constructor() {
    super();
    this.slideSpeed = 5000; // 5 seconds
    this.timer = null;
  }

  componentDidMount() {
    const self = this;
    // this.autoSlide();
    // window.addEventListener('resize', () => {
    //   clearTimeout(self.timer);
    //   self.autoSlide();
    // });
  }

  autoSlide() {
    const slideElements = document.querySelectorAll('.safecoins-bnr-i');
    const screenWidth = document.documentElement.clientWidth;
    const slideQ = [];
    slideElements.forEach((ele) => {
      ele.children[0].style.width = `${screenWidth}px`;
      slideQ.push(ele)
    });
    let slide;
    let active;
    let next;

    const update = () => {
      const temp = slideQ.splice(0, 1);
      slideQ.push(temp[0]);
      active.classList.remove('slide-left');
      slide();
    };

    slide = () => {
      active = slideQ[0];
      next = slideQ[1];
      active.classList.add('slide-left');
      active.classList.remove('next-slide');
      next.classList.add('next-slide');
      this.timer = setTimeout(() => update(), this.slideSpeed);
    };

    slide();
  }

  render() {
    return (
      <div className="safecoins-bnr">
        <div className="safecoins-bnr-i">
          <div className="safecoins-bnr-i-b header-adjust">
            <div className="safecoins-bnr-i-cnt1"><h1 className="bnr-head">Unlimited scaling.<br /> Instant transactions.<br /> No fees</h1></div>
          </div>
        </div>
        <div className="safecoins-bnr-i" style={{
          width: this.props.scroll || 0
        }}>
          <div className="safecoins-bnr-i-b header-adjust" style={{
            width: getWindowWidth(),
          }}>
            <div className="safecoins-bnr-i-cnt2">
              <p className="bnr-para">A cryptocurrency like no other. Digital cash with no public ledger. There’s no limit to the number of transactions which can take place instantly, privately and simultaneously.</p>
              <h1 className="bnr-head">This is Safecoin</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Share extends React.Component {
  render() {
    return (
      <div className="safecoins-share safecoins-lay1">
        <div className="safecoins-share-b safecoins-lay1-b">
          <div className="safecoins-lay1-sec lft safecoins-cntr">
            <div className="safecoins-lay1-sec-b">
              <h3 className="safecoins-cntr-h">Share resource, get paid</h3>
              <p className="safecoins-cntr-para">Safecoin lies at the core of the SAFE Network. It’s money that lets you store data and rewards your contribution to the Network. Only with instant transactions, unlimited scaling potential—and no fees.</p>
              <p className="safecoins-cntr-para">Earning Safecoin is simple. Choose to become a Farmer and connect your computer to the Network. Watch as the Network automatically and continually moves chunks of data around the world to ensure efficiency. Proof of Resource takes the place of more expensive alternatives, like Proof of Work.</p>
              <p className="safecoins-cntr-para">Safecoin can then be used to buy Network resources—like the one-time-fee for uploading data—or exhanged for goods and services like any other currency.</p>
            </div>
          </div>
          <div className="safecoins-lay1-sec rgt">
            <div className="safecoins-lay1-sec-b">
              <div className="safecoins-share-vid">
                {/* <div className="utube-warn-parent">
                  <YouTubeWarn name="share" location="safecoin" />
                  <iframe src="https://www.youtube-nocookie.com/embed/ivwQVe12OAY" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                </div> */}
                <CustomVideo links={CONST.videoLinks.security} />
              </div>
              <div className="safecoins-share-vid-cap">The Currency for Security and Privacy</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Contribute extends React.Component {
  render() {
    return (
      <div className="safecoins-contribute safecoins-lay1">
        <div className="safecoins-contribute-b safecoins-lay1-b">
          <div className="safecoins-lay1-sec lft safecoins-cntr">
            <div className="safecoins-lay1-sec-b">
              <h3 className="safecoins-cntr-h">Contribute and be rewarded</h3>
              <p className="safecoins-cntr-para">The current ad-supported internet model is broken. On SAFE, popular apps and sites are paid directly by the Network according to how much they get used.</p>
              <p className="safecoins-cntr-para">Want to build an app or create content? The days of having to meet your website infrastructure costs are gone. With an open source platform, just build and deploy. No more business-building using other’s personal data.</p>
              <a target="_blank" href={CONST.links.safeCoins.contribute.startDev} className="safecoins-cntr-anchr">Start developing on SAFE</a>
            </div>
          </div>
          <div className="safecoins-lay1-sec rgt">
            <div className="safecoins-lay1-sec-b safecoins-cntr">
              <h3 className="safecoins-cntr-h">Whaddaya mean, no Blockchain?</h3>
              <p className="safecoins-cntr-para">Unlike most other cryptocurrencies Safecoin will not have a blockchain. This means that Safecoin will be highly scalable, unburdened as it is by an ever-growing ledger of transactions.</p>
              <p className="safecoins-cntr-para">This, combined with what is known as Close Group Consensus mechanism, provides something truly special: transactions that are confirmed at network speed and with zero transaction costs.</p>
              <a href={CONST.links.safeCoins.contribute.closeGrp} className="safecoins-cntr-anchr">What is Close Group Consensus?</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Buy extends React.Component {
  render() {
    return (
      <div className="safecoins-buy safecoins-lay1">
        <div className="safecoins-buy-b safecoins-lay1-b">
          <div className="safecoins-lay1-sec rgt">
            <div className="safecoins-lay1-sec-b safecoins-cntr">
              <h3 className="safecoins-cntr-h">Pay Anonymously, be paid privately.</h3>
              <p className="safecoins-cntr-para">Safecoin acts as digital cash. Unlike-blockchain based cryptocurrencies there is no public ledger; only the current and previous owner of each coin are known to each other. So you can be paid in privacy.</p>
              <p className="safecoins-cntr-para">And you can even pay anonymously if you require it. It’s your choice.</p>
            </div>
          </div>
          <div className="safecoins-lay1-sec lft safecoins-cntr">
            <div className="safecoins-lay1-sec-b">
              <h3 className="safecoins-cntr-h">How do I buy Safecoin?</h3>
              <p className="safecoins-cntr-para">Safecoin is the currency that will power the SAFE Network. It will be available to be farmed, used or traded. You can’t buy them yet, but you can buy MaidSafeCoin.</p>
              <p className="safecoins-cntr-para">MaidSafeCoin (MAID) is a token that was created in a crowdsale in 2014 to support the project, and each MAID will be exchanged for a Safecoin when the nework launches. Based on the Omni protocol on top of the Bitcoin blockchain, MAID can be purchased and traded, but not farmed.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Exchanges extends React.Component {
  render() {
    return (
      <div className="safecoins-exchange safecoins-lay1">
        <div className="safecoins-exchange-b safecoins-lay1-b">
          <div className="safecoins-lay1-sec lft">
            <div className="safecoins-exchange-i">
              <a href={CONST.links.safeCoins.exchanges.poloniex} target="_blank">
                <div className="safecoins-exchange-i-img"><img src={Poloniex} alt="Poloniex" /></div>
                <div className="safecoins-exchange-i-name">Poloniex</div>
              </a>
            </div>
            <div className="safecoins-exchange-i">
              <a href={CONST.links.safeCoins.exchanges.hitBtc} target="_blank">
                <div className="safecoins-exchange-i-img"><img src={Hitbtc} alt="Hitbtc" /></div>
                <div className="safecoins-exchange-i-name">HitBTC</div>
              </a>
            </div>
            <div className="safecoins-exchange-i">
              <a href={CONST.links.safeCoins.exchanges.cryptopia} target="_blank">
                <div className="safecoins-exchange-i-img"><img src={Cryptopia} alt="Cryptopia" /></div>
                <div className="safecoins-exchange-i-name">Cryptopia</div>
              </a>
            </div>
            <div className="safecoins-exchange-i">
              <a href={CONST.links.safeCoins.exchanges.openLedger} target="_blank">
                <div className="safecoins-exchange-i-img"><img src={Openledger} alt="Openledger" /></div>
                <div className="safecoins-exchange-i-name">Openledger</div>
              </a>
            </div>
          </div>
          <div className="safecoins-lay1-sec rgt">
            <div className="safecoins-lay1-sec-b safecoins-cntr">
              <h3 className="safecoins-cntr-h">Buying MaidSafeCoin</h3>
              <p className="safecoins-cntr-para">MaidSafeCoin can be bought and traded at these exchanges. We’re adding new ones all the time.</p>
              <p className="safecoins-cntr-para">MAID is based on the Omni protocol and there are no hard wallet options at this stage, so whilst you’re waiting to convert MAID to Safecoin at the launch of the Network, we’d always recommend that you store your coins in cold storage.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class FAQ extends React.Component {
  constructor() {
    super();
    this.faqs = faq;
  }

  render() {
    return (
      <div className="safecoins-faq">
        <div className="safecoins-faq-b">
          <div className="safecoins-faq-h">
            <h2 className="safecoins-faq-title">Safecoin: Frequently Asked Questions</h2>
            <div className="safecoins-faq-h-opt"><button className="btn" onClick={() => {
              location.assign(CONST.links.safeCoins.faq.all);
            }}>See All FAQs</button></div>
          </div>
          <div className="faq-cntr">
            <div className="faq-cntr-b">
              {
                this.faqs.map((faq, i) => (
                  <FAQItem key={`faq-safecoins-item-${i}`} data={faq} />
                ))
              }
            </div>
          </div>
          <div className="safecoins-faq-more"><a className="lnk-underline" href={CONST.links.safeCoins.faq.more}>More Safecoin FAQs</a></div>
        </div>
      </div>
    );
  }
}

// SafeCoins
class SafeCoins extends React.Component {
  state = {
    moveLeft: 0
  }

  sliderSpeed = 80;
  listeners = {};

  componentDidMount() {
    this._toggleSlider();
    if (typeof window === 'undefined') {
      return;
    }
    const self = this;
    this.listeners['resize'] = function (e) {
      self._removeListeners();
      self._toggleSlider();
    }
    window.addEventListener('resize', this.listeners['resize'])
  }

  componentWillUnmount() {
    this._removeListeners();
    this._toggleOverflow(true);
    if (typeof window === 'undefined') {
      return;
    }
    window.removeEventListener('resize', this.listeners['resize'])
  }

  _toggleOverflow(state) {
    document.body.style.overflow = state ? 'scroll' : 'hidden';
  };

  _addListeners() {
    if (typeof window === 'undefined') {
      return;
    }
    window.addEventListener('wheel', this.listeners['wheel'], false);
    window.addEventListener('touchmove', this.listeners['touchmove'], false);
    window.addEventListener('keydown', this.listeners['keydown'], false);
    window.addEventListener('touchstart', this.listeners['touchstart'], false);
  }

  _removeListeners() {
    if (typeof window === 'undefined') {
      return;
    }
    window.removeEventListener('wheel', this.listeners['wheel'], false);
    window.removeEventListener('touchmove', this.listeners['touchmove'], false);
    window.removeEventListener('keydown', this.listeners['keydown'], false);
    window.removeEventListener('touchstart', this.listeners['touchstart'], false);
  }

  _toggleSlider(toUnregister) {
    if (toUnregister) {
      this._removeListeners();
      return;
    }
    if (typeof window === 'undefined') {
      return;
    }
    // support for large screens
    if (getWindowWidth() < 1400) {
      this._removeListeners();
      return;
    }

    let touchStartY = 0;

    // onload check for scroll pos
    if (window.scrollY === 0) {
      this._toggleOverflow(false);
    }

    const minY = 10;

    const scrollControl = (yVal) => {
      if (yVal > 0) {
        console.log('scrolling down')
        if (window.scrollY < minY) {
          this._toggleOverflow(false);
        }
        if (this.state.moveLeft >= getWindowWidth()) {
          this._toggleOverflow(true);
          return;
        }
        this.setState({ moveLeft: this.state.moveLeft + this.sliderSpeed })
      }
      if (yVal < 0) {
        console.log('scrolling up')
        if (window.scrollY < minY && this.state.moveLeft === 0) {
          this._toggleOverflow(false);
          return;
        }
        if (window.scrollY < minY) {
          this._toggleOverflow(false);
        }
        this.setState({ moveLeft: this.state.moveLeft - this.sliderSpeed })
      }
    }

    this.listeners['wheel'] = function (e) {
      scrollControl(e.deltaY);
    }

    this.listeners['touchmove'] = function (e) {
      scrollControl((touchStartY - e.touches[0].pageY));
    }

    this.listeners['keydown'] = function (e) {
      var keys = { spaceBar: 32, up: 38, down: 40 };
      if (e.keyCode == keys.up) {
        scrollControl(-1);
        return;
      }
      if (e.keyCode == keys.down || e.keyCode == keys.spaceBar) {
        scrollControl(1);
        return;
      }
    }

    this.listeners['touchstart'] = function (e) {
      touchStartY = e.touches[0].pageY;
    }

    this._addListeners();
  }

  render() {
    return (
      <section className="safecoins">
        <Head>
          <title>{CONST.meta.safecoin.title}</title>
          <meta name="description" content={CONST.meta.safecoin.desc} />
        </Head>
        <div className="safecoins-b">
          <Banner scroll={this.state.moveLeft} />
          <Share />
          <Contribute />
          <Buy />
          <Exchanges />
          <FAQ />
          <PageEnd />
        </div>
      </section>
    );
  }
}

export default withSiteData(() => (
  <SafeCoins />
));
