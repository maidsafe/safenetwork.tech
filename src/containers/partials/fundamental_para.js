import React from 'react'
import ClassNames from 'classnames';
import showdown from 'showdown';
import Parser from 'html-react-parser';
import { spinalCase } from '../../utils';

export default class FundamentalPara extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const self = this;
  }

  toggleItem(targetEle) {
    const id = encodeURIComponent(targetEle.id);
    const target = targetEle.parentElement;

    // scroll to selected
    // window.scroll(0, target.offsetTop - 80);

    // reset
    // document.querySelectorAll('.faq-cntr-sec-ls-i')
    //   .forEach((ele, i) => {
    //     if (!ele.isEqualNode(target) && ele.classList.contains('open')) ele.classList.remove('open');
    //   });

    setTimeout(() => {
      // add/remove css class
    if (target.classList.contains('open')) {
      target.classList.remove('open');
      return;
    }
    location.replace(`#${id}`);
    target.classList.add('open');
    }, 100);
  }

  OnClickOpen(e) {
    e.preventDefault();
    this.toggleItem(e.target);
  }

  render() {
    const { data } = this.props;

    const spinalCaseStr = spinalCase(data.title);
    const converter = new showdown.Converter();
    // const parsePara = (str) => {
    //   const converter = new showdown.Converter();
    //   console.log('match', converter.makeHtml(str));
    // }

    return (
      <div className="funda-p-cntr-sec">
        {data.title ? <h2 className="funda-p-cntr-sec-h" id={spinalCaseStr}><a href={`#${spinalCaseStr}`}>{data.title}</a></h2> : null}
        <div className="funda-p-cntr-sec-ls">
          {data.list.length > 0 ? data.list.map((li, i) => {
            return (
              <div key={`funda-p-item-ls-${i}`} className={ClassNames('funda-p-cntr-sec-ls-i', 'open') }>
                <div className="funda-p-cntr-sec-ls-i-h">
                  <div className="s-no">{String.fromCharCode(65 + i)}.</div>
                  <div className="text-content">{li.q}</div>
                </div>
              </div>
            )
          }) : null}
          <div className={ClassNames('funda-p-cntr-sec-ls-i', 'none', 'open')}>
            <div className="funda-p-cntr-sec-ls-i-h">
              <div className="s-no"></div>
              <div className="text-content"><h3>Note:</h3></div>
            </div>
            <div className="funda-p-cntr-sec-ls-i-ctx">
              <div className="funda-p-cntr-sec-ls-i-ctx-b">
              <div>
                <p>
                  Whilst the above explanation is a handy approximation of the split, the rewards will in fact be dynamically adjusted according to the Farming Rate determined by the Network:
                </p>
                <ul>
                  <li>Farmers who run the Vaults are paid at 100% of the Farming Rate for all GETs on the Network. I.e. 86.95% (100/115) of all rewards.</li>
                  <li>Application Developers are paid at 10% of the Farming Rate for all GETs on the Network (that relate to their applications). I.e. 8.695% (10/115) of all rewards.</li>
                  <li>Maintainer Developers are paid at 5% of the Farming Rate for all GETs on the Network.. I.e. 4.348% (5/115) of all rewards.</li>
                </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
