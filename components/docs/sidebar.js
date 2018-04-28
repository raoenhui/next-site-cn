import { Fragment, Component } from 'react'
import { Code } from '../../components/docs/text/code.js'
import _scrollIntoViewIfNeeded from 'scroll-into-view-if-needed'

const navElements = [
  "Setup",
  "Automatic Code Splitting",
  "CSS",
  "Static file serving (e.g.: images)",
  "Populating <head>",
  "Fetching data and component lifecycle",
  "Routing",
  "Prefetching Pages",
  "Custom server and routing",
  "Dynamic Import",
  "Custom <App>",
  "Custom <Document>",
  "Custom error handling",
  "Reusing the built-in error page",
  "Custom configuration",
  "Customizing webpack config",
  "Customizing babel config",
  "Production deployment",
  "Static HTML export",
  "Multi Zones",
  "Recipes",
  "FAQ",
  "Contributing"
]

const convertToSnakeCase = (string) => string.toLowerCase().replace(/\s+/g, '-').replace(/[?!]/g, '');

function scrollIntoViewIfNeeded(elem, centerIfNeeded, options, config) {
  const finalElement = findClosestScrollableElement(elem)
  return _scrollIntoViewIfNeeded(
    elem,
    centerIfNeeded,
    options,
    finalElement,
    config
  )
}

function findClosestScrollableElement(_elem) {
  const { parentNode } = _elem
  if (!parentNode) return null

  if (
    parentNode.scrollHeight > parentNode.clientHeight ||
    parentNode.scrollWidth > parentNode.clientWidth
  ) {
    return parentNode
  } else {
    return findClosestScrollableElement(parentNode)
  }
}

export class SidebarNavItem extends Component {
  constructor() {
    super()

    this.activeNavItem = null
  }

  componentDidMount() {
    this.scrollIntoViewIfNeeded()
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.isActive !== nextProps.isActive
  }

  componentDidUpdate() {
    this.scrollIntoViewIfNeeded()
  }

  scrollIntoViewIfNeeded() {
    if (this.props.isActive) {
      if (this.activeNavItem.scrollIntoViewIfNeeded) {
        this.activeNavItem.scrollIntoViewIfNeeded()
      } else {
        scrollIntoViewIfNeeded(this.activeNavItem)
      }
    }
  }

  render() {
    const {item, updateSelected, isActive} = this.props

    return (
      <a href={`#${convertToSnakeCase(item)}`} onClick={updateSelected} className={isActive ? 'active' : ''} ref={ref => (this.activeNavItem = ref)}>
        { item }

        <style jsx>{`
          a {
            display: flex;
            align-items: center;
            font-size: 1.4rem;
            color: #000000;
            text-decoration: none;
            margin-left: -56px;
            padding: 6px 0;
            padding-left: 56px;
            position: relative;
            flex: 1 0 auto;
          }

          a.active {
            font-weight: 500;
          }

          a:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            transition: border-width 0.2s ease;
          }

          a.active:after {
            border-left: 4px solid #000;
            padding-left: 52px;
          }

          a:not(.active):hover:after {
            border-left: 4px solid #DDDDDD;
            padding-left: 52px;
          }
        `}</style>
      </a>
    )
  }
}

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="documentation__sidebar">
        <nav>
          <span className="documentation__sidebar-heading">Getting Started</span>
          {
            navElements.map((item, i) => (
              <SidebarNavItem key={i} item={item} updateSelected={() => this.props.updateSelected(`#${convertToSnakeCase(item)}`)} isActive={this.props.currentSelection === `#${convertToSnakeCase(item)}`} />
            ))
          }
        </nav>

        <style jsx>{`
          .documentation__sidebar {
            width: 312px;
            flex: 0 0 auto;
            position: relative;
            padding-right: 56px;
          }

          .documentation__sidebar nav {
            position: fixed;
            overflow-y: scroll;
            display: flex;
            flex-direction: column;
            width: 256px;
            height: calc(100vh - 144px);
            padding: 6px 0 56px 56px;
          }

          .documentation__sidebar-heading {
            color: #999999;
            text-transform: uppercase;
            font-size: 1.2rem;
            margin-bottom: 12px;
          }

          .documentation__sidebar nav a {
          }

          .documentation__sidebar nav a.active {
            font-weight: 600;
          }

        `}</style>
    </div>
    )
  }
}
