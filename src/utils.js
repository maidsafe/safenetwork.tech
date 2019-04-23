import UAParser from 'ua-parser-js';
import MarkdownIt from 'markdown-it'
import { Parser as ReactParser } from 'html-to-react'

import CONST from './constants';

const md = new MarkdownIt()
const Parser = ReactParser()

const camelize = (str) => (
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  })
);

export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return (window.innerWidth <= CONST.breakPointMob);
};

export const spinalCase = (str) => {
  if (!str) {
    return;
  }
  return str.replace(/(?!^)([\s])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase()
};

export const getAppLink = (app) => {
  const parser = new UAParser();
  const uaRes = parser.getResult();
  const os = uaRes.os.name;
  const isMob = !!uaRes.device.type && (window.innerWidth <= CONST.breakPointMob);

  if (!isMob) { // non mobile
    switch(os) {
      case CONST.UA.OS.macOs:
        return CONST.apps[app].macOs;
      case CONST.UA.OS.win:
        return CONST.apps[app].win;
      default:
        return CONST.apps[app].linux;
    }
  } else { // mobile
    switch(os) {
      case CONST.UA.OS.android:
        return CONST.apps[app].android;
      default:
        return CONST.apps[app].linux;
    }
  }
};

export const genSubNavScrollPos = (data) => {
  const scrollPos = {};
  const subNavEle = document.getElementById('SubNav');
  if (!subNavEle) {
    return scrollPos;
  }
  const subNavEleHeight = subNavEle.scrollHeight;

  for(let i of data) {
    if (!i) {
      continue;
    }
    let ele = document.getElementById(i.id);
    if (!ele) {
      continue;
    }
    scrollPos[camelize(i.id)] = {
      id: i.id,
      name: i.name,
      top: ele.offsetTop + subNavEleHeight,
      height: ele.scrollHeight,
      colr: i.colr,
      last: i.last
    }
  }
  return {
    scrollTop: (subNavEle.offsetTop + subNavEleHeight),
    stopPos: scrollPos
  }
};

export const genRandomKey = () => (
  Math.random().toString(36).slice(2)
)

export const isMenuLight = pathname => (
    [/* List of URLs */].indexOf(pathname) !== -1
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
