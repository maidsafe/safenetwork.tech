import UAParser from 'ua-parser-js'
import MarkdownIt from 'markdown-it'
import { Parser as ReactParser } from 'html-to-react'
import CONST from './constants'

const md = new MarkdownIt()
const Parser = ReactParser()

const camelize = str => (
  str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
    if (+match === 0) return '' // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toLowerCase() : match.toUpperCase()
  })
)

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
  pathname === '/get-involved/'
)

export const parseMDText = text => (
  Parser.parse(md.render(text))
)

export const openLink = link => {
  if (typeof window !== 'undefined') {
    window.location.replace(link)
  }
}
