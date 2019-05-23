import MarkdownIt from 'markdown-it'
import { Parser as ReactParser } from 'html-to-react'
import { osName } from 'react-device-detect'

import CONSTANT from './constant'

const md = new MarkdownIt()
const Parser = ReactParser()

export const spinalCase = (str) => {
  if (!str) {
    return;
  }
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with dashes
  return str
    .replace(regex, '-')
    .replace(/\W$/g, '')
    .toLowerCase();
};

export const detectPlatform = () => {
  const result = {}
  switch(osName) {
    case 'Mac OS':
      result.os = 'Mac'
      result.downloadUrl = CONSTANT.downloadApps.browser.mac
      break;
    case 'Linux':
    case 'Ubuntu':
    case 'Unix':
      result.os = 'Linux'
      result.downloadUrl = CONSTANT.downloadApps.browser.linux
      break;
    case 'Windows':
    default:
      result.os = 'Windows'
      result.downloadUrl = CONSTANT.downloadApps.browser.windows
      break;
  }
  return result
}

export const genRandomKey = () => (
  Math.random().toString(36).slice(2)
)

export const isMenuLight = pathname => (
    ['/safecoin/', '/how-it-works/'].indexOf(pathname) !== -1
)

export const parseMDText = (text, isInline = false) => {
  const parsedText = isInline ? md.renderInline(text) : md.render(text)
  return Parser.parse(parsedText)
}

export const openLink = (link, isExternal) => {
  if (typeof window !== 'undefined') {
    window.open(link, isExternal ? '_blank' : '_self')
  }
}

export const prefixClassName = prefix => (
  (className) => `${prefix}__${className}`
)

export const lockBodyScroll = (scrollState = true) => {
  if (typeof window === 'undefined') {
    return
  }
  window.document.body.style.overflow = scrollState ? 'hidden' : 'visible'
}

export const getLocationHash = () => {
  let hash = ''
  if (typeof window !== 'undefined') {
    hash = window.location.hash.substr(1)
  }
  return hash
}

export const isHowItWorksPage = () => {
  if (typeof window == 'undefined') {
    return
  }
  return window.location.pathname === '/how-it-works/'
}

export const setLocationHash = (hash = '') => {
  if (typeof window !== 'undefined') {
    window.history.pushState('', window.document.title, window.location.pathname + `${hash ? `#${hash}` : ''}`)
  }
}
