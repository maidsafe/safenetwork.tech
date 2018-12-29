import React from 'react'
import { withSiteData, Head } from 'react-static'
import ClassNames from 'classnames';
import copy from 'copy-to-clipboard';
//
import News1 from '../assets/images/news_1.png';
import News2 from '../assets/images/news_2.png';
import News3 from '../assets/images/news_3.png';
import Img1 from '../assets/images/press_img_1.png';
import Img2 from '../assets/images/press_img_2.png';
import Img3 from '../assets/images/press_img_3.png';
import Img4 from '../assets/images/press_img_4.png';

import PageEnd from './partials/page_end';
import CONST from '../constants';

class Banner extends React.Component {
  render() {
    const cpText = 'The SAFE Network is an open source, decentralised data and communications network that replaces data centres and servers with the spare computing resources of its users.';
    return (
      <div className="pkit-bnr header-adjust">
        <div className="pkit-bnr-b">
          <h1 className="pkit-bnr-h bnr-head">Press Kit</h1>
          <div className="pkit-bnr-cntr">
            <p className="bnr-para">{cpText}</p>
            <button className="pkit-bnr-cntr-opt _ghost_btn" onClick={() => {copy(cpText)}}>Copy Text Snippet</button>
          </div>
        </div>
      </div>
    )
  }
}

class Aim extends React.Component {
  render() {
    const cpTextAim = 'The SAFE Network aims to protect the World’s data, providing privacy, security and freedom to everyone on the planet.';
    const cpTextAbt = 'Safecoin is the mechanism that incentivises the provision of resources by the network, measuring and rewarding value without waste. No proof of work, and no blockchain.';
    return (
      <div className="pkit-aim pkit-lay">
        <div className="pkit-aim-b">
          <div className="pkit-aim-sec">
            <div className="pkit-aim-sec-b">
              <h3 className="pkit-aim-sec-h">Project Aims</h3>
              <p className="pkit-aim-sec-para">{cpTextAim}</p>
              <button className="pkit-aim-sec-opt _ghost_btn" onClick={() => {copy(cpTextAim)}}>Copy Text Snippet</button>
            </div>
          </div>
          <div className="pkit-aim-sec">
            <div className="pkit-aim-sec-b">
              <h3 className="pkit-aim-sec-h">About Safecoin</h3>
              <p className="pkit-aim-sec-para">{cpTextAbt}</p>
              <button className="pkit-aim-sec-opt _ghost_btn" onClick={() => {copy(cpTextAbt)}}>Copy Text Snippet</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class PressFreedom extends React.Component {
  render() {
    return (
      <div className="p-freedom pkit-lay">
        <div className="p-freedom-b">
          <div className="p-freedom-sec lft">
            <div className="p-freedom-sec-b">
              <h3 className="p-freedom-sec-h">What the SAFE Network means for Press Freedom</h3>
              <p className="p-freedom-sec-para">With its decentralised architecture and no central control, the SAFE Network is highly censorship-resistant. Content can be published instantly and anonymously without the knowledge of any third party. No more suppressing stories that need to be told, whilst the identity of the author (and any sources) can also be kept private.</p>
            </div>
          </div>
          <div className="p-freedom-sec rgt">
            <div className="p-freedom-sec-b">
              <h3 className="p-freedom-sec-h">New revenue stream</h3>
              <p className="p-freedom-sec-para">In today’s centralised web, monetising content relies on advertising—regardless of the cost to data privacy.</p>
              <p className="p-freedom-sec-para">On the SAFE Network, monetisation will come from Safecoin. Content creators will be able to tag their content and optionally receive micropayments from content readers. In essence, a publishing service with a revenue stream built-in.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class News extends React.Component {
  render() {
    return (
      <div className="pkit-news pkit-lay">
        <div className="pkit-news-b">
          <div className="pkit-news-sec-1">
            <div className="pkit-news-i quote-panel" id="guardian">

              <p className="pkit-news-i-para">The punk rock internet—how DIY ​​rebels ​are working to ​replace the tech giants</p>
              <div className="pkit-news-i-img"><img src={News1} /></div>
              <a href="https://www.theguardian.com/technology/2018/feb/01/punk-rock-internet-diy-rebels-working-replace-tech-giants-snoopers-charter"></a>

            </div>
            <div className="pkit-news-i quote-panel" id="spectrum">
              <p className="pkit-news-i-para">HBO’s “Silicon Valley” turns to real-world startup MaidSafe for its decentralized Internet</p>
              <div className="pkit-news-i-img"><img src={News3} /></div>
              <a href="https://spectrum.ieee.org/view-from-the-valley/telecom/internet/where-is-hbo-silicon-valleys-real-pied-piper-look-in-troon-scotland"></a>
            </div>
            <div className="pkit-news-i quote-panel"  id="techcrunch">
              <p className="pkit-news-i-para">“...the literal opposite of fly-by-night crypto opportunists. They’ve been working on decentralized networking since long before the space became the hot, hyped thing it is now.”</p>
              <div className="pkit-news-i-img"><img src={News2} /></div>
              <a href="https://techcrunch.com/2018/06/02/not-just-another-decentralized-web-whitepaper/"></a>
            </div>
          </div>
          <div className="pkit-news-sec-2">
            <div className="pkit-news-sec-2-i"><img src={Img1} /></div>
            <div className="pkit-news-sec-2-i"><img src={Img2} /></div>
            <div className="pkit-news-sec-2-i"><img src={Img3} /></div>
            <div className="pkit-news-sec-2-i"><img src={Img4} /></div>
          </div>
          <div className="pkit-news-sec-3">
            <div className="pkit-news-sec-3-b">
              <h3 className="pkit-news-sec-3-h">Interview Request</h3>
              <p className="pkit-news-sec-3-para">If you would like to write about us, feel free to get in touch via pr@maidsafe.net. This is obviously not a requirement, but we’d be happy to answer any questions you might have and make time for an interview if required.</p>
              <button className="pkit-news-sec-3-opt _ghost_btn blue" onClick={() => {window.location.replace(CONST.links.pKit.interviewReq)}}>Request Interview</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Downloads extends React.Component {
  render() {
    return (
      <div className="pkit-dwn pkit-lay">
        <div className="pkit-dwn-b">
          <h2 className="pkit-dwn-title">Downloads</h2>
          <div className="pkit-dwn-i">
            <h3 className="pkit-dwn-i-h">Safe Network Logo</h3>
            <p className="pkit-dwn-i-para">Logo pack containing both black and white logos in PNG, SVG and EPS formats.</p>
            <p className="pkit-dwn-i-para">All SAFE Network logos and images are made available via <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution - ShareAlike 4.0</a></p>
            <button className="underline-btn" onClick={() => {
              window.open(CONST.links.pKit.download.logos)
            }}>Download logos</button>
          </div>
          <div className="pkit-dwn-i">
            <h3 className="pkit-dwn-i-h">Image Pack</h3>
            <p className="pkit-dwn-i-para">Print ready editorial photographs and imagery, ready to be added to your piece.</p>
            <button className="underline-btn" onClick={() => {
              window.open(CONST.links.pKit.download.imagePack)
            }}>Download</button>
          </div>
          <div className="pkit-dwn-i">
            <h3 className="pkit-dwn-i-h">PARSEC White Paper</h3>
            <p className="pkit-dwn-i-para">Get all the detail on our highly asynchronous, Byzantine Fault Tolerant consensus mechanism.</p>
            <button className="underline-btn" onClick={() => {
              window.open(CONST.links.pKit.download.parsec)
            }}>Download</button>
          </div>
        </div>
      </div>
    )
  }
}

// PressKit
class PressKit extends React.Component {
  render() {
    return (
      <section className="pkit">
        <Head>
          <title>{CONST.meta.pKit.title}</title>
          <meta name="description" content={CONST.meta.pKit.desc} />
        </Head>
        <div className="pkit-b">
          <Banner />
          <Aim />
          <PressFreedom />
          <News />
          <Downloads />
          <PageEnd />
        </div>
      </section>
    );
  }
}

export default withSiteData(() => (
  <PressKit />
));
