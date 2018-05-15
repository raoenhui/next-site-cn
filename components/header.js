import { Component } from 'react'
import Link from 'next/link'
import NextLogo from '../components/icons/next-logo'
import ZeitLogoOutline from '../components/icons/zeit-logo-outline'
import ToggleIcon from '../components/icons/toggle'

const NavigationItems = ({ isMobile }) => (
  <div className={`navigation-items ${isMobile ? 'is-mobile' : ''}`}>
    <Link prefetch href='/docs'><a>Docs</a></Link>
    <Link prefetch href='/showcase'><a>Showcase</a></Link>
    <Link href='https://github.com/zeit/next.js'><a>GitHub</a></Link>
    <Link href='/learn'><a>Learn</a></Link>

    <style jsx>{`
      a {
        text-decoration: none;
        color: #666666;
        transition: color 0.2s ease;
        font-size: 1.4rem;
      }

      a:hover {
        color: black;
      }

      a:not(:last-child) {
        margin-right: 32px;
      }

      .is-mobile {
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
      }

      .is-mobile a {
        padding: 0 32px;
        height: 64px;
        width: 100%;
        display: flex;
        align-items: center;
        color: black;
      }

      .is-mobile a:not(:last-child) {
        border-bottom: 1px solid #EEEEEE;
      }

    `}</style>
  </div>
)

export default class Header extends Component {
  constructor() {
    super()

    this.state = {
      scrolled: false,
      toggled: false
    }

    this.handleToggleMenu = this.handleToggleMenu.bind(this)
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount() {
    this.bindScroll(true)

    if (typeof window !== 'undefined') {
      const mobileQuery = window.matchMedia(`(max-width: 48em)`)

      const breakpointChange = () => {
        document.body.classList.remove('prevent-scroll')

        this.setState({
          toggled: false
        })
      }

      mobileQuery.addListener(breakpointChange)
    }
  }

  componentWillUnmount() {
    this.bindScroll(false)
  }

  bindScroll(add) {
    if (typeof window !== 'undefined') {
      window[add ? 'addEventListener' : 'removeEventListener']('scroll', this.onScroll)
    }
  }

  onScroll(e) {
    if (window.scrollY >= 38) {
      this.setState({
        scrolled: true
      })
    } else if (window.scrollY <= 38) {
      this.setState({
        scrolled: false
      })
    }
  }

  handleToggleMenu() {
    if (typeof window !== 'undefined') {
      document.body.classList.toggle('prevent-scroll', !this.state.toggled)
    }

    this.setState({
      toggled: !this.state.toggled
    })
  }

  render () {
    return (
      <header>
        <div className={`header ${this.state.scrolled ? 'scrolled' : ''} ${this.state.toggled ? 'nav-toggled' : ''}`}>
          <div className="header__content">
            <Link href='/'>
              <a className="logo"><NextLogo /></a>
            </Link>

            <nav className="header__navigation">
              <NavigationItems />
            </nav>

            <Link href='https://zeit.co/'>
              <a target='_blank' rel="noopener" className="zeit-logo">
                <ZeitLogoOutline />
              </a>
            </Link>

            {/* Mobile Navigation Toggle */}
            <a className="header__nav-toggle" onClick={this.handleToggleMenu}><ToggleIcon /></a>
          </div>

          <nav className="header__mobile-navigation">
            <NavigationItems isMobile />
          </nav>
        </div>

        <style jsx>{`
          header {
            min-height: 144px;
            width: 100%;
            display: flex;
            align-items: center;
          }

          .header {
            z-index: 1000;
            width: 100%;
            transition: box-shadow 0.2s ease-in;
          }

          .header.scrolled, .header.nav-toggled {
            position: fixed;
            left: 50%;
            top: 0;
            height: auto;
            transform: translateX(-50%);
            background: rgba(255, 255, 255, 0.98);
          }

          .header.scrolled {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
          }

          .header__content {
            width: 1000px;
            max-width: 100%;
            height: 72px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            position: relative;
          }

          .logo {
            cursor: pointer;
            display: flex;
          }

          .header__navigation {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }

          .zeit-logo {
            margin-left: auto;
          }

          .zeit-logo :global(svg) {
            transition: fill 0.2s ease;
          }

          .zeit-logo:hover :global(svg) {
            fill: black;
          }

          .header__mobile-navigation {
            display: none;
            text-transform: uppercase;
          }

          .header__nav-toggle {
            margin-left: auto;
            display: none;
            user-select: none;
          }

          @media (max-width: 1064px) {
            .header__content {
              width: 100%;
              padding-left: 32px;
              padding-right: 32px;
            }
          }

          @media (max-width: 48em) {
            .header__navigation, .zeit-logo {
              display: none;
            }

            .header__nav-toggle {
              display: block;
              cursor: pointer;
            }

            .nav-toggled .header__mobile-navigation {
              display: block;
            }

            .header.nav-toggled {
              height: 100%;
              overflow-y: scroll;
            }

            .header.nav-toggled .header__content {
              height: 144px;
            }
          }
        `}</style>
      </header>
    )
  }
}
