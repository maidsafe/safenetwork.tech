import React from 'react'
import { osName, isMobile } from 'react-device-detect'

import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import InviteModal from './InviteModal'
import { prefixClassName, openLink } from 'src/utils'
import CONSTANT from 'src/v1.1/constant'

import './invite.sass'

const baseClassName = 'InviteProcess'
const cn = prefixClassName(baseClassName)

export default class Invite extends React.Component {
  ACCORDIONS = {}

  state = {
    activeAccordion: null,
    showInviteOpts: false,
  }

  componentWillMount() {
    const { content } = this.props
    const { claimInvite, installBrowser, feedback } = content

    this.ACCORDIONS = {
      CLAIM_INVITE: claimInvite.id,
      INSTALL_BROWSER: installBrowser.id,
      FEEDBACK: feedback.id
    }

    if (typeof window !== 'undefined') {
      const hash = window.location.hash.substr(1)
      if (!hash) {
        this.setAccordion(this.ACCORDIONS.CLAIM_INVITE)
        return
      }
      window.addEventListener('load', () => {
        this.setAccordion(hash)
      })
      window.addEventListener('hashchange', () => {
        const newHash = window.location.hash.substr(1)
        this.setAccordion(newHash)
      })
    }
  }

  setAccordion(activeAccordion) {
    if (typeof window !== 'undefined') {
      window.location.hash = `#${activeAccordion}`
    }
    this.setState({
      activeAccordion: activeAccordion
    })
  }

  setAccordionBg() {
    const { activeAccordion } = this.state
    if (activeAccordion === this.ACCORDIONS.CLAIM_INVITE)
      return 'yellow'
    if (activeAccordion === this.ACCORDIONS.INSTALL_BROWSER)
      return 'sky'
  }

  detectPlatform() {
    const result = {}
    if (isMobile) {
      switch(osName) {
        case 'Android':
        default:
          result.os = 'Android'
          result.downloadUrl = CONSTANT.downloadApps.browser.android
          break;
        case 'iOS':
          result.os = 'iOS'
          result.downloadUrl = CONSTANT.downloadApps.browser.ios
          break;
      }
      return result
    }
    switch(osName) {
      case 'Mac OS':
        result.os = 'Mac'
        result.downloadUrl = CONSTANT.downloadApps.browser.mac
        break;
      case 'Windows':
        result.os = 'Windows'
        result.downloadUrl = CONSTANT.downloadApps.browser.windows
        break;
      default:
        result.os = 'Linux'
        result.downloadUrl = CONSTANT.downloadApps.browser.linux
        break;
    }
    return result
  }

  render() {
    const { content } = this.props
    const { title, claimInvite, installBrowser, feedback, modal } = content
    const { activeAccordion } = this.state

    const platform = this.detectPlatform()
    const browserDownloadButton = {}
    browserDownloadButton.name = `${installBrowser.CTA.button.name} ${platform.os}`
    browserDownloadButton.url = platform.downloadUrl

    return (
      <div className={baseClassName}>
        <div className={cn('wrap')}>
          <Accordion bgColor={this.setAccordionBg()}>
            <AccordionItem
              overline={title}
              active={activeAccordion === this.ACCORDIONS.CLAIM_INVITE}
              id={claimInvite.id}
              title={claimInvite.title}
              text={claimInvite.para}
              ctaButton={claimInvite.CTA.button}
              ctaButtonType="primary"
              ctaLink= {claimInvite.CTA.link}
              onClick={() => {
                this.setAccordion(this.ACCORDIONS.CLAIM_INVITE)
              }}
              onClickPrimaryButton={() => {
                this.setState({
                  showInviteOpts: true
                })
              }}
            />
            <AccordionItem
              overline={title}
              active={activeAccordion === this.ACCORDIONS.INSTALL_BROWSER}
              id={installBrowser.id}
              title={installBrowser.title}
              text={installBrowser.para}
              ctaButton={browserDownloadButton}
              ctaLink = {installBrowser.CTA.link}
              ctaButtonType="primary"
              onClickPrimaryButton={() => {
                openLink(browserDownloadButton.url, true)
              }}
              onClick={() => {
                this.setAccordion(this.ACCORDIONS.INSTALL_BROWSER)
              }}
            />
            <AccordionItem
              overline={title}
              active={activeAccordion === this.ACCORDIONS.FEEDBACK}
              id={feedback.id}
              title={feedback.title}
              text={feedback.para}
              ctaButton={feedback.CTA.button}
              ctaButtonType="hollow"
              onClick={() => {
                this.setAccordion(this.ACCORDIONS.FEEDBACK)
              }}
              onClickPrimaryButton={() => {
                openLink(feedback.CTA.button.url, true)
              }}
            />
          </Accordion>
          {
            this.state.showInviteOpts ? (
              <InviteModal
                content={modal}
                onClickClose={() => {
                  this.setState({
                    showInviteOpts: false
                  })
                }}
              />
            ) : null
          }
        </div>
      </div>
    )
  }
}
