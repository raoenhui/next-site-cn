import OpenCollective from '../static/images/open-collective.svg'
import Eaze from '../static/images/eaze.svg'
import MagicLeap from '../static/images/magic-leap.svg'
import Trulia from '../static/images/trulia.svg'
import MozillaVR from '../static/images/mozilla-vr.svg'
import Netflix from '../static/images/netflix.svg'
import Github from '../static/images/github.svg'
import Scale from '../static/images/scale.svg'
import Auth0 from '../static/images/auth0.svg'
import Ticketmaster from '../static/images/ticketmaster.svg'

const Arrow = ({color}) => (
  <svg width="16px" height="16px" viewBox="0 0 27 14" version="1.1">
    <g id="Page-1" fill={color} stroke="none" strokeWidth="1" fillRule="evenodd">
      <polygon id="Arrow" fillRule="nonzero" points="13.4999996 13.9214282 0.6 1.17499997 1.82857139 0.1 13.4999996 11.7714282 25.1714278 0.1 26.3999992 1.17499997"></polygon>
    </g>
  </svg>
)

export default {
  Arrow,
  OpenCollective,
  Eaze,
  MagicLeap,
  Trulia,
  MozillaVR,
  Netflix,
  Github,
  Scale,
  Auth0,
  Ticketmaster
}

