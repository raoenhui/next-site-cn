import {Component} from 'react'
import Icons from '../components/icons'
import Page from '../components/page'
import Slider from '../components/showcase-slider'
import Manifest from '../components/showcase-manifest'

const BottomNav = ({prev, onClick}) => (
  <div className={`nav ${prev ? 'prev' : 'next'}`}>
    <button onClick={onClick}>
      {prev ? <Icons.ArrowPrev /> : <Icons.ArrowNext />}
    </button>
    <style jsx>{`
      .nav {
        width: 50%;
        margin: 29px auto;
      };
      button {
        background: #FFFFFF;
        border: none;
        width:100%;
        height: auto;
        outline: none;
        cursor: pointer;
      }
      .prev {
        border-right: 1px solid #EAEAEA
      };
    `}</style>
  </div>
)

export default class Showcase extends Component {
  constructor() {
    super()

    this.state = {
      externalLink: Manifest.manifest[0].link,
      title: Manifest.manifest[0].title
    }

    this.slider = React.createRef()
    this.slidePrev = this.slidePrev.bind(this)
    this.slideNext = this.slideNext.bind(this)
    this.beforeChange = this.beforeChange.bind(this)
  }

  slidePrev() {
    this.slider.current.prev()
  }

  slideNext() {
    this.slider.current.next()
  }

  beforeChange(showcase) {
    this.setState({
      externalLink: showcase.link,
      title: showcase.title
    })
  }

  render() {
    return (
      <Page>
        <section>
          <aside>
            <div>
              <Slider className='slider'
                ref={this.slider}
                beforeChange={this.beforeChange}
              />
            </div>
            <div className='figure'>
              <div>
                <h2>{this.state.title}</h2>
              </div>
              <div className='external'>
                <a target='_blank' href={this.state.externalLink}>
                  <span>{this.state.title}</span>
                  <span className='icon'><img src='/static/images/external-link.png' /></span>
                </a>
              </div>
            </div>
            <div className='bottom-nav'>
              <BottomNav prev onClick={this.slidePrev} />
              <BottomNav onClick={this.slideNext} />
            </div>
          </aside>
        </section>
        <style jsx>{`
          section {
            margin: 0px auto 0 auto;
          }

          aside {
            margin: 0 auto;
            text-align: center;
          }

          .figure {
            padding: 0px 0 54px 0;
            margin: 0 auto;
            text-align: center;
          }

          h2 {
            color: #000000;
            font-size: 32px;
            font-weight: 200;
          }

          .external {
            color: #0000FF;
            font-size: 14px;
            font-weight: 200;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
          }

          .external a {
            color:inherit;
            text-decoration: none;
          }

          .external .icon {
            position: relative;
            top: 1px;
            left: 10px;
          }

          .bottom-nav {
            display: flex;
            border-top: 1px solid #EAEAEA;
            margin: 0 auto 0 auto;
          }


          @media (min-width: 1000px) {
            section {
              margin: 100px auto 0 auto;
            }

            .bottom-nav {
              display: none;
            }
          }

          @media (min-width: 1280px) {
            section {
              margin: 100px auto 0 auto;
            }

            .bottom-nav {
              display: none;
            }
          };
        `}</style>
      </Page>
    )
  }
}
