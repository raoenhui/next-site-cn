import Head from 'next/head'
import Header from '../components/header'
import Icons from '../components/icons'
import DescIcon01 from '../static/images/desc-icon-01.svg'
import DescIcon02 from '../static/images/desc-icon-02.svg'
import DescIcon03 from '../static/images/desc-icon-03.svg'
import DescIcon04 from '../static/images/desc-icon-04.svg'
import DescIcon05 from '../static/images/desc-icon-05.svg'
import DescIcon06 from '../static/images/desc-icon-06.svg'
import GithubIcon from '../static/images/github-icon.svg'

const Hero = () => (
  <section>
    <aside className='title'>
      <h1>Minimalistic <br className='brc' />Framework <br className='brw' />for <br className='brc' />Server-Rendered <br className='brc' />React Applications</h1>
      <p><span className='highlight'>Next 5 is out!</span> — Universal Webpack, CSS Imports, Plugins and Zones</p>
    </aside>
    <aside className='hero'>
      <img src="/static/images/video.png" alt="demo video"/>
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
          min-height: 424px;
        };
      };
      @media (min-width: 1000px) {
        section {
          display: flex;
          flex-direction: column;
          margin: 164px auto 0 auto;
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

const Strap = () => (
  <div className='button'>
    <div className='arrow top'><Icons.Arrow /></div>
    <div className='arrow bottom'><Icons.Arrow color='white' /></div>
    <style jsx>{`
      .button {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        border: 1px solid #333333;
        margin: 97px auto 75px auto;
        cursor: pointer;
        overflow: hidden;
        transition: background-color 0.2s;
        position: relative;
      };
      .button:hover {
        background-color: #333333;
      };
      .arrow {
        position: absolute;
        left: 0;
        right: 0;
        margin: 0 auto;
        transition: top 0.2s ease-in-out;
        text-align: center;
        padding: 0;
      };
      .button .top {
        top: 12px;
      };
      .button:hover .top {
        top: -20px;
      };
      .button .bottom {
        top: 50px;
      };
      .button:hover .bottom {
        top: 12px;
      };
    `}</style>
  </div>
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
        <span><Icons.Github /></span>
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
  <div className='container'>
    <span>{icon}</span>
    <h2>{title}</h2>
    <div className='desc'>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium olorem que laudantium.</p>
      <p>Totam rem aperiam, eaque ipsa qu ae ab illo inventore veritatis et quasi architecto beatae vitae dicta.</p>
    </div>
    <style jsx>{`
      .container {
        width: 273px;
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
  </div>
)

const Descriptions = () => (
  <section>
    <aside className='hero'>
      <img src="/static/images/showcases.png" alt="showcases"/>
    </aside>
    <article>
      <aside>
        <Description clasName='desc-item' icon={<DescIcon01 />} title='Mobile Friendly'/>
        <Description clasName='desc-item' icon={<DescIcon02 />} title='Full Apps'/>
        <Description clasName='desc-item' icon={<DescIcon03 />} title='Static Websites'/>
      </aside>
      <aside>
        <Description clasName='desc-item' icon={<DescIcon04 />} title='PWA'/>
        <Description clasName='desc-item' icon={<DescIcon05 />} title='Plugin Ecosystem'/>
        <Description clasName='desc-item' icon={<DescIcon06 />} title='Simple and Easy'/>
      </aside>
    </article>
    <style jsx>{`
      article {
        width: 979px;
        margin: 131px auto 126px auto;
      };
      article aside {
        display: flex;
        justify-content: space-between;
      };
      article aside:nth-child(2n) {
        margin-top: 80px;
      };
      article aside div {
        flex: 30%;
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
    `}</style>
  </section>
)

const Footer = () => (
  <footer>
    <div className='container'>
      <div className='contact'>
        <span className='name'>Next.js</span><span className='email'>— team@nextjs.org</span>
      </div>
      <div className='license'>
        <span>MIT Licensed. Copyright © 2018 ZEIT, Inc. All rights reserved.</span>
      </div>
      <div className='github-icon'>
        <GithubIcon />
      </div>
    </div>
    <style jsx>{`
      footer {
        background-color: #FAFAFA;
        border-top: 1px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA;
      };
      .name {
        font-size: 16px;
        color: black;
        padding-right: 13px;
      };
      .email {
        font-size: 14px;
        color: #999999;
      };
      .email:hover {
        color: #000000;
        cursor: pointer;
      };
      .container {
        width: 1000px;
        margin: auto;
        vertical-align: top;
        display: flex;
        justify-content: center;
        padding: 62px 0;
      }
      .license {
        flex-grow: 2;
        text-align: right;
      }
      .license span {
        font-size: 14px;
        color: #999999;
        margin-right: 64px;
      };
      .github-icon {
        border-left: 1px solid #EAEAEA;
        padding-left: 20px;
        opacity: 0.4;
      };
      .github-icon:hover {
        opacity: 1.0;
        cursor: pointer;
      };
    `}</style>
  </footer>
)

export default () => (
  <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <main>
      <Header />
      <Hero />
      <Strap />
      <Showcase />
      <Descriptions />
    </main>
    <Footer />
    <style jsx global>{`
      body {
        padding: 0;
        margin: 0;
        min-height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing:  antialiased;
        -webkit-font-smoothing: antialiased;
      };
    `}</style>
  </div>
)
