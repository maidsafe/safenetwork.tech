import React from 'react'
import { Link } from 'react-static'
import Classnames from 'classnames';
import CONST from '../../constants';
import { isMobile } from '../../utils';

const nonSocialClass = '.footer-sec-ls';
const socialClass = '.footer-social-mob';

const toggle = (ele, toRemove) => {
  const targetParent = ele.parentElement;
  if (toRemove || targetParent.classList.contains('open-footer-sec')) {
    targetParent.classList.remove('open-footer-sec');
    return;
  }
  targetParent.classList.add('open-footer-sec');
};

const reset = () => {
  if (isMobile()) {
    return;
  }
  document.querySelectorAll(socialClass).forEach(ele => toggle(ele, true));
  document.querySelectorAll(nonSocialClass).forEach(ele => toggle(ele, true));
}

const openFooterSec = (e, isSocial) => {
  if (typeof window === 'undefined') return;
  if (!isMobile()) return;

  const targetClass = isSocial ? socialClass : nonSocialClass;
  const targetEle = e.target.parentElement.querySelector(targetClass);
  toggle(targetEle);
}

class FooterSec extends React.Component {
  componentDidMount() {
    window.addEventListener('resize', () => { reset() });
  }

  render() {
    return (
      <div className="footer-sec">
        <div className="footer-sec-b">
          <h3 className="footer-sec-h" onClick={(e) => openFooterSec(e)}>{this.props.title}</h3>
          <div className="footer-sec-ls">
            <div className="footer-sec-ls-b">
              {this.props.links.map((lnk, i) => {
                return <Link key={`footerLnk-${i}`} className={Classnames('footer-i footer-sec-ls-i', {
                  'for-mob': lnk.forMob
                })} to={lnk.href} target={lnk.ext ? '_blank' : ''}>{lnk.name}</Link>
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class SAFENetwork extends React.Component {
  constructor() {
    super();
    this.links = [
      { name: 'Home', href: '/', forMob: true },
      { name: 'How It Works', href: CONST.links.pages.hiw },
      { name: 'Fundamentals', href: CONST.links.pages.fundamentals },
      { name: 'Safecoin', href: CONST.links.pages.safecoins },
      { name: 'FAQ', href: CONST.links.pages.faq },
      { name: 'Timeline', href: CONST.links.pages.timeline },
      { name: 'Press Kit', href: CONST.links.pages.pKit },
      { name: 'Get Involved', href: CONST.links.pages.getInv },
      { name: 'Blog', href: CONST.links.footer.blog }
    ];
  }
  render() {
    return (
      <div className="footer-comp safe-net">
        <div className="footer-comp-b">
          <FooterSec title="SAFE Network" links={this.links} isFlex />
        </div>
      </div>
    )
  }
}

class Community extends React.Component {
  constructor() {
    super();
    this.links = [
      { name: 'SAFE Network Forum', href: CONST.links.footer.comm.forum },
      { name: 'Developers Forum', href: CONST.links.footer.comm.devForum },
    ];
  }
  render() {
    return (
      <div className="footer-comp community">
        <div className="footer-comp-b">
          <FooterSec title="Community" links={this.links} />
        </div>
      </div>
    )
  }
}

class Developers extends React.Component {
  constructor() {
    super();
    this.links = [
      { name: 'Developer Hub', href: CONST.links.footer.dev.hub },
      { name: 'Github', href: CONST.links.footer.dev.github },
    ];
  }
  render() {
    return (
      <div className="footer-comp devs">
        <div className="footer-comp-b">
          <FooterSec title="Developers" links={this.links} />
        </div>
      </div>
    )
  }
}

class Company extends React.Component {
  constructor() {
    super();
    this.links = [
      { name: 'About MaidSafe', href: CONST.links.footer.comp.maidsafe },
      { name: 'Contact', href: CONST.links.footer.comp.contact },
      { name: 'Careers', href: CONST.links.footer.comp.career },
    ];
  }
  render() {
    return (
      <div className="footer-comp company">
        <div className="footer-comp-b">
          <FooterSec title="Company" links={this.links} />
        </div>
      </div>
    )
  }
}

class Legal extends React.Component {
  constructor() {
    super();
    this.links = [
      { name: 'Privacy', href: CONST.links.footer.legal.policy },
      { name: 'Cookies', href: CONST.links.footer.legal.cookies },
      { name: 'Credits', href: CONST.links.footer.legal.credits },
    ];
  }
  render() {
    return (
      <div className="footer-comp legal">
        <div className="footer-comp-b">
          <FooterSec title="Legal" links={this.links} />
        </div>
      </div>
    )
  }
}

class Social extends React.Component {
  render() {
    return (
      <div className="footer-social">
        <div className="footer-social-b">
          <h3 className="footer-social-title" onClick={(e) => openFooterSec(e, true)}>Social</h3>
          <div className="footer-social-mob">
            <div className="footer-social-mob-b">
              {
                Object.keys(CONST.links.footer.social).map((item, index) => {
                  const lnk = CONST.links.footer.social[item];
                  return (<Link key={`footer-social-lnk-mob-${index}`} to={lnk.url} target="_blank" className="footer-i footer-social-mob-i">{lnk.name}</Link>)
                })
              }
            </div>
          </div>
          <div className="footer-social-non-mob">
            {
              Object.keys(CONST.links.footer.social).map((item, index) => {
                const lnk = CONST.links.footer.social[item];
                return (<div key={`footer-social-lnk-non-mob-${index}`} className={`footer-i footer-social-i ${lnk.style}`}><Link to={lnk.url} target="_blank"></Link></div>)
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-b">
          <SAFENetwork />
          <Community />
          <Developers />
          <Company />
          <Legal />
          <Social />
        </div>
      </footer>
    );
  }
};
