import {Component} from 'react'
import Slider from 'react-slick'
import Page from '../components/page'
import Showcases from '../components/showcases'
import Icons from '../components/icons'

const screenshots = [
  '/static/images/showcases/magic-leap-0.png',
  '/static/images/showcases/magic-leap-1.png',
  '/static/images/showcases/magic-leap-2.png',
  '/static/images/showcases/magic-leap-3.png',
  '/static/images/showcases/magic-leap-4.png',
  '/static/images/showcases/magic-leap-5.png'
]

function ArrowNext(props) {
  const { className, style, onClick, currentSlide } = props;
  const bgSlide = (currentSlide + 1) % screenshots.length
  const updateStyle = {
    ...style,
    right: '-320px',
    width: '160px',
    height: '180px',
    backgroundImage: `url(${screenshots[bgSlide]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200%',
    backgroundPosition:'100% 0'
  }
  return (
    <div>
      <div className={className} style={{ ...updateStyle, display: "block" }} onClick={onClick} />
      <style jsx>{`
        @media (max-width: 1000px) {
          div {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

function ArroePrev(props) {
  const { className, style, onClick, currentSlide} = props;
  const bgSlide = (currentSlide - 1) +  screenshots.length / screenshots.length;
  const updateStyle = {
    ...style,
    left: '-320px',
    width: '160px',
    height: '180px',
    backgroundImage: `url(${screenshots[bgSlide]})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '200%',
    backgroundPosition:'50% 0'
  }

  return (
    <div>
      <div className={className} style={{ ...updateStyle, display: "block" }} onClick={onClick} />
      <style jsx>{`
        @media (max-width: 1000px) {
          div {
            display: none;
          };
        }
      `}</style>
    </div>
  )
}

const settings = {
  customPaging: function(i) {
    return (<div></div>)
  },
  nextArrow: <ArrowNext />,
  prevArrow: <ArroePrev />,
  dots: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1000,
      nextArrow: () => <div></div>,
      prevArrow: undefined
    }
  ]
};

const ShowcaseSlider = () => (
  <Slider {...settings}>
    <img src={`${screenshots[0]}`} />
    <img src={`${screenshots[1]}`} />
    <img src={`${screenshots[2]}`} />
    <img src={`${screenshots[3]}`} />
    <img src={`${screenshots[4]}`} />
    <img src={`${screenshots[5]}`} />
  </Slider>
)

export default class Showcase extends Component {
  constructor() {
    super()

    this.slider = React.createRef();
    this.slideNext = this.slideNext.bind(this)
    this.slidePrev = this.slidePrev.bind(this)
  }

  slideNext() {
    this.slider.current.slickNext()
  }

  slidePrev() {
    this.slider.current.slickPrev()
  }

  render() {
    return (
      <Page>
        <section>
          <aside>
            <div className="slider">
              <Slider {...settings} ref={this.slider}>
                <img src={`${screenshots[0]}`} />
                <img src={`${screenshots[1]}`} />
                <img src={`${screenshots[2]}`} />
                <img src={`${screenshots[3]}`} />
                <img src={`${screenshots[4]}`} />
                <img src={`${screenshots[5]}`} />
              </Slider>
              <div className="floating-nav prev">
                <Icons.ArrowPrev />
              </div>
              <div className="floating-nav next">
                <Icons.ArrowNext />
              </div>
            </div>
            <div className='figure'>
              <div><h2>Magic Leap</h2></div>
              <div className='external'>
                <a target='_blank' href='https://magicleap.com'>
                  <span>magicleap.com</span>
                  <span className='icon'><Icons.ExternalLink /></span>
                </a>
              </div>
            </div>
            <div className='nav-arrows'>
                <div className='nav prev'>
                  <button onClick={this.slidePrev}><Icons.ArrowPrev /></button>
                </div>
                <div className='nav next'>
                  <button onClick={this.slideNext}><Icons.ArrowNext /></button>
                </div>
              </div>
          </aside>
        </section>
        <style jsx>{`
          section {
            margin: 67px auto 0 auto;
          };
          aside {
            margin: 0 auto;
            text-align: center;
            width: 500px;
          };
          .figure {
            padding: 67px 0;
            margin: 0 auto;
            text-align: center;
          };
          h2 {
            color: #000000;
            font-size: 32px;
            font-weight: 200;
          };
          .external {
            color: #0000FF;
            font-size: 14px;
            font-weight: 200;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
          };
          .external a {
            color:inherit;
            text-decoration: none;
          };
          .external .icon {
            position: relative;
            top: 1px;
            left: 10px;
          };
          .nav-arrows {
            display: flex;
            border-top: 1px solid #EAEAEA;
            margin: 54px auto 0 auto;
          };
          .nav {
            width: 50%;
            margin: 29px auto;
          };
          .nav button {
            background: #FFFFFF;
            border: none;
            width:100%;
            height: auto;
            outline: none;
            cursor: pointer;
          }
          .nav.prev {
            border-right: 1px solid #EAEAEA
          };
          .slider {

          }
          .floating-nav {

          };
          @media (min-width: 1000px) {
            section {
              margin: 147px auto 0 auto;
            };
            aside {
              width: 700px;
            };
            .nav-arrows {
              display: none;
            }
          };
          @media (min-width: 1280px) {
            aside {
              width: 1200px;
            };
            .nav-arrows {
              display: none;
            }
          };
        `}</style>
      </Page>
    )
  }
}
