import Page from '../components/page'
import CompanySlider from '../components/company-slider'
import RoundButton from '../components/round-button'
import Icons from '../components/icons'

const Hero = () => (
  <section>
    <aside className='banner'>
      <p>
        <span className='highlight'>Next 5 is out!</span> — Universal Webpack, CSS Imports, Plugins and Zones <span className='released'>Monday, April 16th 2018</span>
      </p>
    </aside>
    <aside className='title'>
      <h1>React Applications <br className='brk' />Made Simple</h1>
      <div className='subtitle'><b>Next.js</b> is a lightweight framework for <br className='brk' />static and server-rendered applications.</div>
    </aside>
    <aside className='button'>
      <RoundButton color='black'>Learn More</RoundButton>
    </aside>
    <aside className='hero'>
      <img className="img-desktop" src="/static/images/video-placeholder-desktop.png" alt="demo video"/>
      <img className="img-mobile" src="/static/images/video-placeholder-mobile.png" alt="demo video"/>
    </aside>
    <aside className='label'>
      <div>See an app created in 9 seconds.</div>
    </aside>
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
      .banner {
        display: none;
      };
      .banner p {
        border: 1px solid #EAEAEA;
        border-radius: 30px;
        height: 24px;
        margin: 0 auto 0 auto;
        font-size: 14px;
        color: #666666;
        line-height: 26px;
        background-image: url('/static/images/rectangle.png');
        background-color: #FAFAFA;
        background-repeat: no-repeat;
        background-position: 11px 7px;
        padding: 0px 11px 1px 31px;
      };
      .title h1 {
        text-align: center;
        font-size: 44px;
        font-weight: 400;
        margin: 0px auto 0 auto;
        padding: 0;
      };
      .subtitle {
        text-align: center;
        color: #555555;
        font-size: 16px;
        font-weight: 400;
        margin: 7px auto 0 auto;
      };
      .subtitle b {
        color: #000000;
      };
      .highlight {
        color: black;
      };
      .released {
        padding-left: 71px;
        font-weight: 600;
      };
      .brk {
        display: inline-block;
      };
      .subtitle {
        margin: 26px auto 0 auto;
      };
      .button {
        margin: 26px auto 29px auto;
      };
      .label {
        margin: 0 auto 32px auto;
      };
      .label div {
        font-size: 12px;
        color: #999999;
      };
      .img-desktop {
        display: block;
        max-width: 1258px;
        max-height: 424px;
      };
      .img-mobile {
        display: none;
      };
      @media (max-width: 619px) {
        .title h1 {
          font-size: 33px;
        };
        .banner p {
          padding: 0px 11px 30px 31px;
        };
        .img-desktop {
          display: none;
        };
        .img-mobile {
          display: block;
        }
      };
      @media (min-width: 620px) {
        .img-desktop {
          max-width: 700px;
          max-height: 234px;
        };
      };
      @media (min-width: 760px) {
        .img-desktop {
          max-width: 908px;
          max-height: 304px;
        };
      };
      @media (min-width: 1000px) {
        section {
          display: flex;
          flex-direction: column;
          margin: 154px auto 0 auto;
        };
        .banner {
          margin-bottom: 50px;
        };
        .brk {
          display: none;
        };
        .label {
          margin: 0 auto 40px auto;
        };
        .button {
          margin: 46px auto 70px auto;
        };
        .banner {
          display: flex;
        };
        .img-desktop {
          max-width: 1258px;
          max-height: 424px;
        };
      };
    `}</style>
  </section>
)

const Showcase = () => (
  <section>
    <aside className='title'>
      <h1>The World's Leading <br className='brk' />Companies Use <br className='brk' />and Love Next.js</h1>
      <p className="subtitle">We're honored some of the most talented <br className='brk' />creatives out there build with Next.js.</p>
    </aside>
    <CompanySlider />
    <aside className='button'>
      <RoundButton color='white'>View Showcase</RoundButton>
    </aside>
    <aside className='hero'>
      <img src="/static/images/showcases.png" alt="showcases"/>
    </aside>
    <div className='pad'></div>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
        background-color: #FAFAFA;
        border-top: 1px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA;
        overflow-y: visible;
        position: relative;
      };
      aside {
        display: flex;
        justify-content: center;
      };
      .title {
        flex-direction: column;
        justify-content: center;
        margin: 22px auto 31px auto;
      };
      .title h1 {
        text-align: center;
        font-size: 32px;
        font-weight: 200;
        padding: 0;
        margin: 0;
      };
      .title .subtitle {
        text-align: center;
        color: #999999;
        line-height: 24px;
        font-size: 14px;
        margin: 11px auto 0 auto;
      };
      .button {
        margin: 31px 0 33px 0;
      };
      .brk {
        display: inline-block;
      };
      .hero {
        position: relative;
        height: auto;
      };
      .hero img {
        max-width: 90%;
        border: 1px solid #EAEAEA;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        position: absolute;
        top: -30%;
        bottom: 0;
      };
      .pad {
        width: 100%;
        padding-bottom: 35%;
      }
      @media (max-width: 619px) {

      };
      @media (min-width: 590px) {
        .hero img {
          max-width: 70%;
        };
      };
      @media (min-width: 760px) {
        .hero img {
          max-width: 80%;
        };
      };
      @media (min-width: 860px) {
        .hero img {
          max-width: 80%;
        };
      };
      @media (min-width: 1000px) {
        section {
          margin: 0 auto 0 auto;
        };
        .brk {
          display: none;
        };
        .title {
          margin: 92px auto 66px auto;
        };
        .title h1 {
          text-align: center;
          font-size: 35px;
          font-weight: 200;
        };
        .title .subtitle {
          margin: 13px auto 0 auto;
        };
        .button {
          margin: 57px 0 57px 0;
        };
        .hero {
          height: auto;
        };
        .hero img {
          max-width: 80%;
        };
      };
      @media (min-width: 1001px) {
        .pad {
          padding-bottom: 25%;
        };
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
      section {
        padding-top: 274px;
      };
      .desc {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 300px;
        margin: 0 auto 0 auto;
      };
      .desc.bottom {
        margin-bottom: 80px;
      };
      @media (max-width: 619px) {
        section {
          padding-top: 174px;
        }
      };
      @media (min-width: 590px) {
        section {
          padding-top: 174px;
        }
      };
      @media (min-width: 1000px) {
        section {
          padding-top: 274px;
        };
        .desc {
          max-width: 979px;
          justify-content: space-around;
        };
        .desc.bottom {
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
