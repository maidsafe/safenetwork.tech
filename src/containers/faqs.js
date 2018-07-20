import React from 'react'
import { withSiteData, Head } from 'react-static'
//
import faqs from '../content/faqs.json';
import PageEnd from './partials/page_end';
import FAQItem from './partials/faq_item';
import CONST from '../constants';
import {getAppLink} from '../utils';


// FAQ page
class FAQ extends React.Component {
  constructor() {
    super();
    this.faqs = faqs;
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
      <section className="faq">
        <Head>
          <title>{CONST.meta.faq.title}</title>
          <meta name="description" content={CONST.meta.faq.desc} />
        </Head>
        <div className="faq-b">
          <div className="faq-h header-adjust"><h1 className="faq-h-i bnr-head">Frequently Asked Questions</h1></div>
          <div className="faq-cntr">
            <div className="faq-cntr-b">
              {
                this.faqs.map((faq, i) => (
                  <FAQItem key={`faq-item-${i}`} data={faq} />
                ))
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
  <FAQ />
));
