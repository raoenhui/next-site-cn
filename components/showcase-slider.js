import {Component} from 'react'
import SlickSlider from 'react-slick'
import Icons from '../components/icons'

const Null = () => <div></div>

const SliderNav = ({prev, bg, onClick}) => (
  <div style={{backgroundImage: `url("${bg}")`}} className={`button ${prev ? 'next' : 'prev'}`} onClick={onClick}>
    <div className='inner'></div>
    {prev ? <Icons.ArrowPrevWhite /> : <Icons.ArrowNextWhite />}
    <style jsx>{`
      .button {
        width: 160px;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-repeat: no-repeat;
        background-size: 200%;
        background-position: 100% 0;
        cursor: pointer;
        position: relative;
      };
      .button.next {
        background-position: 50% 0;
      };
      .inner {
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
      };
    `}</style>
  </div>
)

class LazyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: '',
      loaded: false,
      phClassName: 'placeholder'
    }
  }

  load() {
    if (!this.state.loaded) {
      const img = new Image()
      img.onload = () => {
        this.setState({
          loaded: true,
          src: this.props.src,
          phClassName: 'placeholder loaded'
        })
      }

      img.src = this.props.src
    }
  }

  render() {
    return (
      <div className='container'>
        <img className={this.state.phClassName} src={this.props.placeholder} />
        <img className='src' src={this.state.src}/>
        <style jsx>{`
          img {
            width: 100%
          };
          .src {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
          }
          .container {
            position: relative;
            box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.12);
          };
          .placeholder {
            opacity: 1;
          };
          .placeholder.loaded {
            opacity: 0;
            transition: opacity 2s ease-in-out;
          }
      `}</style>
    </div>
    )
  }
}


export default class Slider extends Component {
  constructor({images}) {
    super()

    this.state = {
      images: images,
      prevBg: images[images.length - 1].src,
      nextBg: images[1].src,
    }

    this.slider = React.createRef()
    this.sliders = images.map(() => React.createRef())
    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)

    this.settings = {
      customPaging: <Null />,
      beforeChange: (oldIndex, newIndex) => {
        const images = this.state.images
        this.setState({
          prevBg: images[(newIndex - 1 + images.length) % images.length].src,
          nextBg: images[(newIndex + 1) % images.length].src
        })

        this.sliders[newIndex].current.load()
      },
      nextArrow: <Null />,
      prevArrow: <Null />,
      dots: false,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    }
  }

  componentDidMount() {
    this.sliders[0].current.load()
  }

  next() {
    this.slider.current.slickNext()
  }

  prev() {
    this.slider.current.slickPrev()
  }

  render() {
    return (
      <div className='container'>
        <div className='nav prev'>
          <SliderNav prev bg={this.state.prevBg} onClick={this.prev} />
        </div>
        <div className='slider'>
          <SlickSlider {...this.settings} ref={this.slider}>
            {
              this.state.images.map((image, i) => {
                return <LazyLoad ref={this.sliders[i]} key={image.src} src={image.src} placeholder={image.placeholder} />
              })
            }
          </SlickSlider>
        </div>
        <div className='nav next'>
          <SliderNav bg={this.state.nextBg} onClick={this.next} />
        </div>
        <style jsx>{`
          .container {
            display: flex;
            min-height: 0;
            min-width: 0;
            justify-content: space-between;
            align-items: center;
          }
          .slider {
            flex: 1;
            margin: 0 25px;
          };
          .nav {
            flex: 0.3;
            display: none;
          };
          .nav.next {
            justify-content: flex-end;
          };
          @media (min-width: 1000px) {
            .nav {
              display: flex;
            };
          };
          @media (min-width: 1280px) {
            .nav {
              display: flex;
            };
          };
        `}</style>
      </div>
    )
  }
}
