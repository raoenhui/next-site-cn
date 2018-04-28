import {Component} from 'react'
import SlickSlider from 'react-slick'
import Icons from '../components/icons'
import Manifest from '../components/showcase-manifest'

const Null = () => <div></div>

const SliderNav = ({prev, bg, onClick}) => (
  <div style={{backgroundImage: `url("${bg}")`}} className={`button ${prev ? 'next' : 'prev'}`} onClick={onClick}>
    <div className='inner'></div>
    {prev ? <Icons.ArrowPrevWhite /> : <Icons.ArrowNextWhite />}
    <style jsx>{`
      .button {
        width: 100%;
        height: 100%;
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

const Navigation = ({children, prev, onClick}) => (
  <div className={`button ${prev ? 'prev' : 'next'}`} onClick={onClick}>
    <div className='thumbnail'>
      {children}
    </div>
    <div className='inner'></div>
    <div className='arrow'>
      {prev ? <Icons.ArrowPrevWhite /> : <Icons.ArrowNextWhite />}
    </div>
    <style jsx>{`
      .button {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        box-shadow: 0 30px 40px rgba(0, 0, 0, 0.12);
      };
      .inner {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
      };
      .thumbnail {
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        transition: all 0.2s ease;
      };
      .button:hover .thumbnail {
        transform: scale(1.4);
      };
      .prev .thumbnail {
        left: -70%;
      };
      .next .thumbnail {
        right: -120%;
      }
      .arrow {
        position: absolute;
      }
    `}</style>
  </div>
)

class LazyLoad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: props,
      src: '',
      loaded: false,
      phClassName: 'placeholder'

    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.image.src !== prevState.image.src) {
      return {
        image: nextProps.image,
      }
    }
  }

  load() {
    const img = new Image()
    img.onload = () => {
      this.setState({
        loaded: true,
        src: this.props.image.src,
        phClassName: 'placeholder loaded'
      })
    }

    img.src = this.props.image.src
  }

  render() {
    return (
      <div className='container'>
        <img className={this.state.phClassName} src={this.state.image.data} />
        <img className='src' src={this.state.image.src}/>
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
  constructor() {
    super()

    this.slider = React.createRef()
    this.nextBg = React.createRef()
    this.prevBg = React.createRef()
    this.sliders = Manifest.manifest.map(() => React.createRef())

    this.state = {
      prevImage: Manifest.manifest[Manifest.prev(0)],
      nextImage: Manifest.manifest[Manifest.next(0)]
    }

    this.prev = this.prev.bind(this)
    this.next = this.next.bind(this)

    this.settings = {
      customPaging: <Null />,
      beforeChange: (oldIndex, newIndex) => {
        this.sliders[newIndex].current.load()
        this.setState({
          prevImage: Manifest.manifest[Manifest.prev(newIndex)],
          nextImage: Manifest.manifest[Manifest.next(newIndex)],
        })

        this.props.beforeChange(Manifest.manifest[newIndex])

        setTimeout(() => {
          this.nextBg.current.load()
          this.prevBg.current.load()
        }, 100);
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
    this.nextBg.current.load()
    this.prevBg.current.load()
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
          <Navigation prev onClick={this.prev}>
            <LazyLoad prev ref={this.prevBg} image={this.state.prevImage} />
          </Navigation>
        </div>
        <div className='slider'>
          <SlickSlider {...this.settings} ref={this.slider}>
            {
              Manifest.manifest.map((image, i) => {
                return <LazyLoad ref={this.sliders[i]} key={image.src} image={image}/>
              })
            }
          </SlickSlider>
        </div>
        <div className='nav next'>
          <Navigation onClick={this.next}>
            <LazyLoad ref={this.nextBg} image={this.state.nextImage} />
          </Navigation>
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
            margin: 0 160px;
            box-shadow: 0px 30px 40px rgba(0, 0, 0, 0.12);
            max-width: 1280px;
          };
          .slider .slick-slider {
            width: 1280px;
            height: 734px;
          };
          .nav {
            overflow: hidden;
          };
          .nav.next {
            justify-content: flex-end;
            transition: all .2s ease-in-out;
          };
          .nav.prev:hover {
            transform: translateX(40px);
            transition: all .2s ease-in-out;
          };
          .nav.next:hover {
            transform: translateX(-40px);
            transition: all .2s ease-in-out;
          };
          .nav.prev {
            width: 100px;
            min-width: 100px;
            height: 120px;
            overflow: hidden;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            margin-left: -40px;
            transition: all 0.2s ease;
          };
          .nav.next {
            width: 100px;
            min-width: 100px;
            height: 120px;
            overflow: hidden;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            margin-right: -40px;
            transition: all 0.2s ease;
          };
          @media (min-width: 1000px) {
            .nav {
              display: flex;
            };
            .nav.prev {
              width: 200px;
              min-width: 200px;
              height: 180px;
            };
            .nav.next {
              width: 200px;
              min-width: 200px;
              height: 180px;
            };
          };
          @media (min-width: 1280px) {
            .nav {
              display: flex;
            };
            .nav.prev {
              width: 200px;
              min-width: 200px;
              height: 180px;
            };
            .nav.next {
              width: 200px;
              min-width: 200px;
              height: 180px;
            };
          };
          @media (max-width: 1360px) {
            .slider {
              margin: 0 100px;
            };
            .nav.prev {
              width: 200px;
              min-width: 200px;
              height: 180px;
            };
            .nav.next {
              width: 200px;
              min-width: 200px;
              height: 180px;
            };
          };
          @media (max-width: 1060px) {
            .slider {
              margin: 0 60px;
            };
            .nav.prev {
              width: 160px;
              min-width: 160px;
              height: 140px;
            };
            .nav.next {
              width: 160px;
              min-width: 160px;
              height: 140px;
            };
          };
          @media (max-width: 900px) {
            .slider .slick-slider {
              width: 90%;
              margin: 0 auto;
            };
            .nav.prev {
              width: 0;
              min-width: 0;
            };
            .nav.next {
              width: 0;
              min-width: 0;
            };
          };
        `}</style>
      </div>
    )
  }
}
