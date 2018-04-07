import Head from 'next/head'
import Link from 'next/link'
import Icons from '../components/icons'
import DescIcon01 from '../static/images/desc-icon-01.svg'
import DescIcon02 from '../static/images/desc-icon-02.svg'
import DescIcon03 from '../static/images/desc-icon-03.svg'
import DescIcon04 from '../static/images/desc-icon-04.svg'
import DescIcon05 from '../static/images/desc-icon-05.svg'
import DescIcon06 from '../static/images/desc-icon-06.svg'
import GithubIcon from '../static/images/github-icon.svg'

const Header = () => (
  <header>
    <nav>
      <div className='left'>
        <Link href='/'><a className='logo next-logo'></a></Link>
      </div>
      <div className='mid'>
        <Link href='/'><a>Docs</a></Link>
        <Link href='/'><a>About</a></Link>
        <Link href='/'><a>Showcase</a></Link>
        <Link href='/'><a>Github</a></Link>
        <Link href='/'><a>Enterprise</a></Link>
        <Link href='/'><a>Learn</a></Link>
      </div>
      <div className='right'>
        <Link href='/'><a className='logo zeit-logo'></a></Link>
      </div>
    </nav>
    <style jsx>{`
      header {
        display: flex;
        width: 100%;
        height: 70px;
        justify-content: center;
        align-items: center;
        box-shadow: 0 2px 4px rgba(73, 60, 60, 0.12)
      };
      nav {
        display: flex;
        width: 1000px;
        height: 50px;
        justify-content: center;
        align-items: center;
      };
      nav .left {
        margin-right: 180px;
      };
      nav .mid {
        flex-direction: row;
      };
      nav .mid a {
        font-size: 14px;
        color: #999999;
        margin-right: 34px;
        text-decoration: none;
      };
      nav .right {
        margin-left: 180px;
      };
      .logo {
        display: block;
        position: relative;
        background-size: contain;
        background-repeat: no-repeat;
      };
      .next-logo {
        width: 82px;
        height: 50px;
        background-image: url('/static/images/logotype-nextjs.png')
      };
      .zeit-logo {
        width: 18px;
        height: 16px;
        background-image: url('/static/images/logotype-white.png')
      };
      nav:hover .zeit-logo {
        background-image: url('/static/images/logotype-black.png')
      };
      nav:hover .mid a {
        color: #000000
      };
    `}</style>
  </header>
)

const Hero = () => (
  <section>
    <aside className='title'>
      <h1>Minimalistic Framework for Server-Rendered React Applications</h1>
      <p><span className='highlight'>Next 5 is out!</span> — Universal Webpack, CSS Imports, Plugins and Zones</p>
    </aside>
    <aside className='hero'>
      <img src="/static/images/video.png" alt="demo video"/>
    </aside>
    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
      };
      aside {
        display: flex;
        justify-content: center;
      };
      aside.title {
        flex-direction: column;
        justify-content: center;
      };
      aside.title p {
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
      aside.title h1 {
        width: 772px;
        height: 116px;
        text-align: center;
        font-size: 50px;
        font-weight: 100;
        margin: 68px auto 0 auto;
      };
      aside.hero {
        margin: 106px 0 0 0;
      };
      .highlight {
        color: black;
      };
    `}</style>
  </section>
)

const Strap = () => (
  <div className='button'>
    <div><Icons.Arrow /></div>
    <div><Icons.Arrow color='white' /></div>
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
      };
      .button:hover {
        background-color: #333333;
      };
      .button div {
        position: relative;
        top: 16px;
        transition: top 0.2s ease-in-out;
        text-align: center;
      };
      .button div:first-child {
        margin-bottom: 42px;
      };
      .button:hover div {
        top: -50px;
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
