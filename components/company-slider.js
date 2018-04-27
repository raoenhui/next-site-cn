import Slider from 'react-slick'
import Icons from './icons'

const Null = () => <div></div>

const settings = {
  customPaging: function(i) {
    return (<div></div>)
  },
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 1000,
  cssEase: "linear",
  variableWidth: true,
  nextArrow: <Null />,
  prevArrow: <Null />,
  pauseOnFocus: false,
  pauseOnHover: false,
  focusOnSelect: false,
  swipeToSlide: false,
  swipe: false,
  touchMove: false,
  draggable: false
};

export default () => (
  <Slider {...settings}>
    <div style={{width:388}}><Icons.OpenCollective /></div>
    <div style={{width:140}}><Icons.Eaze /></div>
    <div style={{width:176}}><Icons.MagicLeap /></div>
    <div style={{width:180}}><Icons.Trulia /></div>
    <div style={{width:238}}><Icons.MozillaVR /></div>
    <div style={{width:172}}><Icons.Netflix /></div>
    <div style={{width:172}}><Icons.GithubLogo /></div>
    <div style={{width:155}}><Icons.Scale /></div>
    <div style={{width:181}}><Icons.Auth0 /></div>
    <div style={{width:285}}><Icons.Ticketmaster /></div>
  </Slider>
)
