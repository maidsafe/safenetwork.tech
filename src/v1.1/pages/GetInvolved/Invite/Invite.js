import React from 'react'

import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import InviteModal from './InviteModal'
import {
  prefixClassName,
  openLink,
  lockBodyScroll,
  detectPlatform,
  getLocationHash,
} from 'src/utils'

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
      window.addEventListener('load', () => {
        const newHash = getLocationHash()
        this.setAccordion(newHash)
      })
      window.addEventListener('hashchange', () => {
        const newHash = getLocationHash()
        this.setAccordion(newHash || this.ACCORDIONS.CLAIM_INVITE)
      })
      const hash = getLocationHash()
      if (!hash) {
        this.setAccordion(this.ACCORDIONS.CLAIM_INVITE)
        return
      }
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

  toggleInviteModal(state = false) {
    lockBodyScroll(state)
    this.setState({
      showInviteOpts: state
    })
  }

  render() {
    const { content } = this.props
    const { title, claimInvite, installBrowser, feedback, modal } = content
    const { activeAccordion } = this.state

    const platform = detectPlatform()
    const browserDownloadButton = {}
    browserDownloadButton.name = `${installBrowser.CTA.button.name} ${platform.os}`
    browserDownloadButton.url = platform.downloadUrl

    return (
      <div className={baseClassName}>
        <div className={cn('wrap')}>
          <Accordion className="underlineLink-bright-onYellow" bgColor={this.setAccordionBg()}>
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
                this.toggleInviteModal(true)
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
                  this.toggleInviteModal()
                }}
                onInviteRequest={() => {
                  openLink('mailto:invite@maidsafe.net')
                }}
                onJoinForum={() => {
                  openLink('https://safenetforum.org', true)
                }}
              />
            ) : null
          }
        </div>
      </div>
    )
  }
}
