import React from 'react';
import { withRouter, Link } from 'react-static';
import Classnames from 'classnames';
//
import CONST from '../../constants';
//
import SiteLogo from '../../assets/images/logo.svg';
import SiteLogoLight from '../../assets/images/logo_light.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.routes = CONST.links.pages;
    this.state = {
      showMobMenu: false,
      hiwNav: false,
      safecoinsNav: false,
      fundamentalsNav: false,
      timelineNav: false,
      faqNav: false,
      pKitNav: false,
      getInvNav: false,
    }
  }

  componentDidMount() {
    this.setNavActive();
  }

  componentDidUpdate(prev) {
    if (!prev.location) {
      return;
    }
    if (prev.location.pathname !== this.props.location.pathname) {
      this.setNavActive();
    }
  }

  onClickHandleMobMenu(e) {
    e.preventDefault();
    this.setState({ showMobMenu: !this.state.showMobMenu });
  }

  hideMenu() {
    if (!this.state.showMobMenu) {
      return;
    }
    this.setState({ showMobMenu: false });
  }

  isNavMatch(target) {
    let route = '';
    if (!target) {
      return;
    }
    if (typeof window !== 'undefined') {
      route = window.location.pathname;
    }
    if (typeof target === 'string') {
      return (route.search(target) !== -1);
    }
    return (target.filter((nav) => (route.search(nav) !== -1)).length !== 0);
  }

  setNavActive() {
    this.setState({
      hiwNav: this.isNavMatch(this.routes.hiw),
      safecoinsNav: this.isNavMatch(this.routes.safecoins),
      fundamentalsNav: this.isNavMatch(this.routes.fundamentals),
      timelineNav: this.isNavMatch(this.routes.timeline),
      faqNav: this.isNavMatch(this.routes.faq),
      pKitNav: this.isNavMatch(this.routes.pKit),
      getInvNav: this.isNavMatch(this.routes.getInv),
    });
    // this.hideMenu();
  }

  render() {
    return (
      <header>
        <div className="header-b">
          <div className={Classnames('site-logo', {
            'light-theme': this.state.getInvNav,
            'half-light-theme': this.state.timelineNav
          })}>
            <Link onClick={() => this.hideMenu()} to="/">
              <img className="default" src={SiteLogo} alt="SAFE Network logo" />
              <img className="light" src={SiteLogoLight} alt="SAFE Network logo" />
            </Link>
          </div>
          <div className={Classnames('main-nav', {
            open: this.state.showMobMenu
          })}>
            <nav className={Classnames({
              'light-theme': this.state.getInvNav,
              'half-light-theme': this.state.timelineNav
            })}>
              <div className="nav-mob-h">
                <div className="site-logo">
                  <Link onClick={() => this.hideMenu()} to="/">
                    <img src={SiteLogo} alt="SAFE Network logo" />
                  </Link>
                </div>
                <div className="mob-nav-close-btn"><button type="button" className="btn" onClick={this.onClickHandleMobMenu.bind(this)}></button></div>
              </div>
              <div className="nav-b">
                <div className="nav-ib">
                  <Link onClick={() => this.hideMenu()} className={Classnames({ active: this.state.hiwNav })} to={CONST.links.mainNav.howItWorks.href}>{CONST.links.mainNav.howItWorks.name}</Link>
                  <Link onClick={() => this.hideMenu()} className={Classnames({ active: this.state.fundamentalsNav })} to={CONST.links.mainNav.fundamentals.href}>{CONST.links.mainNav.fundamentals.name}</Link>
                  <Link onClick={() => this.hideMenu()} className={Classnames({ active: this.state.safecoinsNav })} to={CONST.links.mainNav.safecoins.href}>{CONST.links.mainNav.safecoins.name}</Link>
                  <Link onClick={() => this.hideMenu()} className={Classnames({ active: this.state.timelineNav })} to={CONST.links.mainNav.timeline.href}>{CONST.links.mainNav.timeline.name}</Link>
                  <Link onClick={() => this.hideMenu()} className={Classnames({ active: this.state.faqNav })} to={CONST.links.mainNav.faq.href}>{CONST.links.mainNav.faq.name}</Link>
                  <Link onClick={() => this.hideMenu()} className={Classnames({ active: this.state.pKitNav })} to={CONST.links.mainNav.pressKit.href}>{CONST.links.mainNav.pressKit.name}</Link>
                  <Link onClick={() => this.hideMenu()} className={Classnames('btn-lnk', { active: this.state.getInvNav })} to={CONST.links.mainNav.getInvolved.href}>{CONST.links.mainNav.getInvolved.name}</Link>
                </div>
              </div>
            </nav>
            <div className={Classnames("mob-nav-btn", {
              'light-theme': this.state.getInvNav || this.state.timelineNav
            })}><button type="button" className="btn" onClick={this.onClickHandleMobMenu.bind(this)}></button></div>
          </div>
        </div>
      </header>
    );
  }
};

const HeaderCompWithRoute = withRouter(Header);
export default HeaderCompWithRoute;
