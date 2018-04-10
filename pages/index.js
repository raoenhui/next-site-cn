import Page from '../components/page'
import Strap from '../components/strap'
import Icons from '../components/icons'

const Hero = () => (
  <section>
    <aside className='title'>
      <h1>Minimalistic <br className='brc' />Framework <br className='brw' />for <br className='brc' />Server-Rendered <br className='brc' />React Applications</h1>
      <p><span className='highlight'>Next 5 is out!</span> — Universal Webpack, CSS Imports, Plugins and Zones</p>
    </aside>
    <aside className='hero'>
      <img src="/static/images/video.png" alt="demo video"/>
    </aside>
    <Strap />
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        margin: 16px auto 0 auto;
      };
      aside {
        display: flex;
        justify-content: center;
      };
      .title {
        flex-direction: column;
        justify-content: center;
      };
      .title p {
        border: 1px solid #EAEAEA;
        border-radius: 30px;
        height: 24px;
        margin: 41px auto 0 auto;
        font-size: 14px;
        color: #666666;
        line-height: 26px;
        background-image: url('/static/images/rectangle.png');
        background-repeat: no-repeat;
        background-position: 11px 7px;
        padding: 0px 11px 1px 31px;
      };
      .title h1 {
        text-align: center;
        font-size: 50px;
        font-weight: 100;
        margin: 0px auto 0 auto;
        padding: 0;
      };
      .hero {
        margin: 106px 0 0 0;
        min-height: 234px;
        position: relative;
      };
      .hero img {
        display: block;
        max-width: 100%;
        max-height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
      };
      .highlight {
        color: black;
      };
      .brc {
        display: inline-block;
      };
      .brw {
        display: none;
      };
      @media (max-width: 490px) {
        .title p {
          padding: 0px 11px 30px 31px;
        };
      };
      @media (min-width: 650px) {
        .hero {
          min-height: 324px
        };
      };
      @media (min-width: 1000px) {
        section {
          display: flex;
          flex-direction: column;
          margin: 164px auto 0 auto;
        };
        .hero {
          min-height: 424px;
        };
        .hero img {
          display: block;
          max-width:1342px;
          max-height:526px;
          width: auto;
          height: auto;
        };
        .brc {
          display: none;
        };
        .brw {
          display: inline-block;
        }
      };
    `}</style>
  </section>
)

const Showcase = () => (
  <section>
    <aside className='title'>
      <h1>The World's Leading Companies Use and Love Next.js</h1>
      <p className="subtitle">We're honored some of the most talented creatives out there build with Next.js.</p>
    </aside>
    <aside className='hero'>
      <div className="icons">
        <span><Icons.OpenCollective /></span>
        <span><Icons.Eaze /></span>
        <span><Icons.MagicLeap /></span>
        <span><Icons.Trulia /></span>
        <span><Icons.MozillaVR /></span>
        <span><Icons.Netflix /></span>
        <span><Icons.GithubLogo /></span>
        <span><Icons.Scale /></span>
        <span><Icons.Auth0 /></span>
        <span><Icons.Ticketmaster /></span>
      </div>
    </aside>
    <aside>
      <div className='button'>
          <span>View Showcase</span>
      </div>
    </aside>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        background-color: #FAFAFA;
        border-top: 1px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA;
        height: 900px;
        overflow: hidden;
      };
      aside {
        display: flex;
        justify-content: center;
      };
      .title {
        flex-direction: column;
        justify-content: center;
      };
      .title h1 {
        width: 904px;
        height: 42px;
        text-align: center;
        font-size: 35px;
        font-weight: 100;
        margin: 92px auto 0 auto;
      };
      .title .subtitle {
        color: #999999;
        line-height: 24px;
        font-size: 14px;
        margin: 13px auto 0 auto;
      };
      .icons {
        display: flex;
        margin: 66px auto 0 auto;
        justify-content: center;
      };
      .icons {
        display: flex;
        align-content: center;
        align-items: center;
      };
      .icons span {
        margin-right: 58px;
      };
      .icons span:last-child {
        margin-right: 0px;
      };
      .button {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 200px;
        height: 50px;
        background-color: #FFFFFF;
        border-radius: 50px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
        margin: 53px auto 0 auto;
      };
      .button span {
        font-size: 14px;
        line-height: 16px;
        height: 16px;
      };
    `}</style>
  </section>
)

const Description = ({icon, title, desc}) => (
  <aside className='container'>
    <span>{icon}</span>
    <h2>{title}</h2>
    <div className='desc'>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium olorem que laudantium.</p>
      <p>Totam rem aperiam, eaque ipsa qu ae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
    </div>
    <style jsx>{`
      .container {
        max-width: 273px;
        margin-bottom: 24px;
      };
      h2 {
        padding: 0px;
        margin: 10px 0 0 59px;
        font-weight: 400;
        font-size: 20px
      };
      span {
        width: 40px;
        height: 40px;
        float: left;
      };
      p {
        padding: 0;
        margin: 0;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: #999999;
        margin-top: 18px;
      };
      .desc {
        margin-top: 28px;
      };
    `}</style>
  </aside>
)

const Descriptions = () => (
  <section>
    <aside className='hero'>
      <img src="/static/images/showcases.png" alt="showcases"/>
    </aside>
    <div className='desc top'>
      <Description icon={<Icons.MobileFriendly />} title='Mobile Friendly'/>
      <Description icon={<Icons.FullApps />} title='Full Apps'/>
      <Description icon={<Icons.StaticWebSites />} title='Static Websites'/>
    </div>
    <div className='desc bottom'>
      <Description icon={<Icons.PWA />} title='PWA'/>
      <Description icon={<Icons.PluginEcosystem />} title='Plugin Ecosystem'/>
      <Description icon={<Icons.SimpleAndEasy />} title='Simple and Easy'/>
    </div>
    <style jsx>{`
      .desc {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 300px;
        margin: 0 auto 0 auto;
      };
      .desc.top {
        margin-top: 164px;
      };
      .desc.bottom {
        margin-bottom: 80px;
      };
      .hero {
        position: relative;
        margin: -460px auto 0 auto;
        display: flex;
        justify-content: center;
      };
      .hero img {
        border: 1px solid #EAEAEA;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5)
      };
      @media (min-width: 979px) {
        .desc {
          max-width: 979px;
          justify-content: space-around;
        };
        .desc.bottom {
          margin-top: 80px;
          margin-bottom: 126px;
        };
      };
    `}</style>
  </section>
)

export default () => (
  <Page>
    <Hero />
    <Showcase />
    <Descriptions />
  </Page>
)
