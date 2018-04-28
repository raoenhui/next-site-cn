import { Component, Fragment } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import { format, parse } from 'url'
import Head from '../../components/docs/head'
import Header from '../../components/docs/header'
import Sidebar from '../../components/docs/sidebar'
import { H1, H2, H3, H4 } from '../../components/docs/text/headings'
import { Blockquote } from '../../components/docs/text/quotes'
import { InlineCode, Code } from '../../components/docs/text/code'
import { GenericLink } from '../../components/docs/text/link'
import Heading from '../../components/docs/heading'
import NProgress from 'nprogress'
import debounce from 'lodash.debounce'
import RouterEvents from '../../lib/router-events'

if (typeof window !== 'undefined') {
  require('intersection-observer')
}

const start = debounce(NProgress.start, 200)
RouterEvents.on('routeChangeStart', start)
RouterEvents.on('routeChangeComplete', () => {
  start.cancel()
  NProgress.done()
})
RouterEvents.on('routeChangeError', () => {
  start.cancel()
  NProgress.done()
})

function changeHash(hash) {
  const { pathname, query } = Router

  const parsedUrl = parse(location.href)
  parsedUrl.hash = hash

  Router.router.changeState(
    'replaceState',
    format({ pathname, query }),
    format(parsedUrl)
  )
}

export default class Documentation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentSelection: null
    }
    this.contentNode = null
    this.observer = null

    this.updateSelected = this.updateSelected.bind(this)
    this.onHashChange = this.onHashChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('hashchange', this.onHashChange)

    const nodes = [...this.contentNode.querySelectorAll('[id]')]
    const intersectingTargets = new Set()

    this.observer = new IntersectionObserver(entries => {
      for (const { isIntersecting, target } of entries) {
        if (isIntersecting) {
          intersectingTargets.add(target)
        } else {
          intersectingTargets.delete(target)
        }
      }

      if (!intersectingTargets.size) return

      const sorted = [...intersectingTargets].sort(
        (a, b) => nodes.indexOf(a) - nodes.indexOf(b)
      )

      const hash = '#' + (sorted[0].id || '')
      if (location.hash !== hash) {
        changeHash(hash)
        this.updateSelected(hash)
      }
    })

    for (const node of nodes) {
      this.observer.observe(node)
    }

    const { hash } = window.location
    this.setState({ currentSelection: hash })
  }

  componentWillUnmount() {
    window.removeEventListener('hashchange', this.onHashChange)

    this.observer.disconnect()
    this.observer = null
  }

  updateSelected = hash => {
    this.setState({
      currentSelection: hash
    })
  }

  onHashChange() {
    this.updateSelected(window.location.hash);
  }

  render() {
    return (
      <Fragment>
        <Head title="Getting Started">
          <style
            dangerouslySetInnerHTML={{
              __html: `
              html {
                height: 100%;
                box-sizing: border-box;
                font-size: 62.5%;
              }

              *,
              *:before,
              *:after {
                box-sizing: inherit;
              }

              body {
                position: relative;
                min-height: 100%;
                margin: 0;
                padding-bottom: 6rem;
                font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                text-rendering: optimizeLegibility;
                line-height: 1.5;
                font-size: 1.6rem;
              }

              a {
                -webkit-tap-highlight-color: rgba(0,0,0,0);
              }

              html, body {
                background-color: #FFF;
                color: #000;
              }

              ::selection {
                background-color: #000;
                color: #FFF;
              }
            `
            }}
          />
        </Head>

        <Header />

        <div className="documentation">
          <Sidebar updateSelected={this.updateSelected} currentSelection={this.state.currentSelection} />

          <div className="documentation__content">
            <div className="documentation__header">
              <H1 active="something">{ this.props.meta.title }</H1>
            </div>

            <div className="documentation__content" ref={ref => (this.contentNode = ref)}>
              { this.props.children }
            </div>
          </div>

          <style jsx>{`
          .documentation {
            display: flex;
            padding-top: 144px;
          }

          .documentation__sidebar {
            display: flex;
            flex-direction: column;
            padding-left: 56px;
          }

          .documentation__header h1 {
            margin-top: 0;
          }

          .documentation__content {
            width: calc(100vw - 312px);
            max-width: 600px;
            padding-right: 56px;
          }
        `}</style>
        </div>
      </Fragment>
    )
  }
}

const DocH2 = ({ children }) => (
  <div>
    <Heading lean>
      <H2>{children}</H2>
    </Heading>
    <style jsx>{`
      div {
        margin: 40px 0 0 0;
      }
    `}</style>
  </div>
)

const DocH3 = ({ children }) => (
  <div>
    <Heading lean>
      <H3>{children}</H3>
    </Heading>
    <style jsx>{`
      div {
        margin: 30px 0 0 0;
      }
    `}</style>
  </div>
)

export const components = {
  h1: H1,
  h2: DocH2,
  h3: DocH3,
  h4: H4,
  blockquote: Blockquote,
  code: Code,
  inlineCode: InlineCode,
  a: GenericLink
}

