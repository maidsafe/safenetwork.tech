import MarkdownIt from 'markdown-it'
import { Parser as ReactParser } from 'html-to-react'

const md = new MarkdownIt()
const Parser = ReactParser()

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

export const spinalCase = str => {
  if (!str) return
  return str.replace(/(?!^)([\s])/g, ' $1').replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase()
}
