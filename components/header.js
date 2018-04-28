import {Component} from 'react'
import Link from 'next/link'
import Icons from './icons'

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

  componentWillMount() {
    this.bindScroll(true)
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
    if (window.scrollY > 0 && !this.state.scrolled) {
      this.setState({
        scrolled: true
      })
    } else if (window.scrollY === 0 && this.state.scrolled) {
      this.setState({
        scrolled: false
      })
    }
  }

  handleToggleMenu() {
    this.setState({
      toggled: !this.state.toggled
    })
  }

  render () {
    return (
      <header className={this.state.scrolled ? 'scrolled' : ''}>
        <nav>
          <aside className='top-menu'>
            <div className='next-logo'>
              <Link href='/'><a><Icons.Next /></a></Link>
            </div>
            <div className='toggle-menu'>
              <a onClick={this.handleToggleMenu}><Icons.ToggleMenu /></a>
            </div>
          </aside>
          <aside className={`menu ${this.state.toggled ? 'toggled' : ''}`}>
            <Link prefetch href='/docs'><a>Docs</a></Link>
            <Link prefetch href='/showcase'><a>Showcase</a></Link>
            <Link href='https://github.com/zeit/next.js'><a>Github</a></Link>
            <Link href='/learn'><a>Learn</a></Link>
          </aside>
          <aside className='zeit-logo'>
            <Link href='https://zeit.co/'>
              <a target='_blank'>
                <span className='white'><Icons.ZeitWhite/></span>
                <span className='black'><Icons.Zeit/></span>
              </a>
            </Link>
          </aside>
        </nav>
        <style jsx>{`
          header {
            z-index: 999;
          };
          nav {
            position: relative;
            max-width: 1000px;
            margin: auto;
          };
          .top-menu {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 20px;
          };
          .next-logo a {
            display: block;
            width: 82px;
            height: 50px;
          };
          .toggle-menu {
            display: block;
            cursor: pointer;
          };
          .menu {
            display: none;
            flex-direction: column;
          };
          .menu.toggled {
            display: flex;
          }
          .menu a {
            font-size: 14px;
            padding: 16px 20px;
            color: #000;
            text-transform: uppercase;
            text-decoration: none;
            border-bottom: 1px solid #eaeaea;
          };
          .zeit-logo {
            display: none;
          };
          @media (min-width: 1000px) {
            header {
              display: flex;
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 80px;
              justify-content: center;
              align-items: center;
              background-color: rgba(255, 255, 255, 0.98);
            };
            header.scrolled {
              box-shadow: 0 2px 4px rgba(73, 60, 60, 0.12);
            };
            nav {
              display: flex;
              min-width: 1000px;
              height: 50px;
              align-items: center;
            };
            .top-menu {
              display: block;
              padding: 0;
            };
            .menu {
              display: flex;
              flex-direction: row;
              flex: 1;
              padding-bottom: 1px;
              justify-content: center;
              align-items: center;
            };
            .menu a {
              padding: 0;
              padding-right: 38px;
              color: #999999;
              text-transform: none;
              text-decoration: none;
              border-bottom: none;
              transition: .2s ease-out;
            };
            .menu a:hover {
              color: #000000;
              transition: .2s ease-out;
            };
            .toggle-menu {
              display: none;
            }
            .zeit-logo {
              display: block;
              width: 18px;
              padding-bottom: 1px;
            };
            .zeit-logo a {
              display: block;
              width: 18px;
              height: 16px;
              transition: .2s ease-out;
            };
            .zeit-logo a .black {
              display: none;
              transition: .2s ease-out;
            };
            .zeit-logo a:hover .black {
              display: block;
              transition: .2s ease-out;
            };
            .zeit-logo a:hover .white {
              display: none;
            };
          }
        `}</style>
      </header>
    )
  }
}
