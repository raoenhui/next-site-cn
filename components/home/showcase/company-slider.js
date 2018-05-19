import Slider from 'react-slick'
import Icons from '../../icons'

const settings = {
  customPaging: () => null,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  cssEase: "linear",
  variableWidth: true,
  nextArrow: () => null,
  prevArrow: () => null,
  pauseOnFocus: false,
  pauseOnHover: false,
  focusOnSelect: false,
  swipeToSlide: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false
};

export default () => (
  <div className="company-slider">
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
    <style jsx>{`
      .company-slider div {
        cursor: default;
        outline: none;
      }
    `}</style>
  </div>
  
)
