import {Component} from 'react'
import Page from '../components/page'
import CompanySlider from '../components/company-slider'
import RoundButton from '../components/round-button'
import Icons from '../components/icons'
import Intro from '../components/home/intro'

const Showcase = () => (
  <section>
    <aside className='title'>
      <h1>The World's Leading <br className='brk' />Companies Use <br className='brk' />and Love Next.js</h1>
      <p className="subtitle">We're honored some of the most talented <br className='brk' />creatives out there build with Next.js.</p>
    </aside>
    <CompanySlider />
    <aside className='button'>
      <RoundButton color='white' href='/showcase'>View Showcase</RoundButton>
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
        border-radius: 5px;
      };
      .hero img {
        width: 90%;
        height: auto;
        position: absolute;
        top: -30%;
        bottom: 0;
        border-radius: 5px;
        box-shadow: 2px 5px 40px 10px rgba(0,0,0,0.1)
      };
      .pad {
        width: 100%;
        padding-bottom: 15%;
      };
      @media (min-width: 426px) {
        .hero img {
          width: 60%;
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
      }
    `}</style>
  </section>
)

const Description = ({icon, title, desc}) => (
  <aside className='container'>
    <span>{icon}</span>
    <h2>{title}</h2>
    <style jsx>{`
      .container {
        display: flex;
        justify-content: left;
        align-items: center;
        margin: 0 auto 10px auto;
        min-width: 260px;
      }

      h2 {
        padding: 0px;
        margin: 0 0 0 19px;
        font-weight: 400;
        font-size: 20px;
      }

      span {
        width: 40px;
        height: 40px;
      }

      p {
        padding: 0;
        margin: 0;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: #999999;
        margin-top: 18px;
      }
    `}</style>
  </aside>
)

const Descriptions = () => (
  <section>
    {/* <div className='descs'>
      <Description icon={<Icons.MobileFriendly />} title='Mobile Friendly'/>
      <Description icon={<Icons.FullApps />} title='Full Apps'/>
      <Description icon={<Icons.StaticWebSites />} title='Static Websites'/>
      <Description icon={<Icons.PWA />} title='PWA'/>
      <Description icon={<Icons.PluginEcosystem />} title='Plugin Ecosystem'/>
      <Description icon={<Icons.SimpleAndEasy />} title='Simple and Easy'/>
    </div> */}
    <style jsx>{`
      section {
        padding-top: 50%;
        padding-bottom: 30px;
      }

      .descs {
        display: flex;
        max-width: 979px;
        flex-flow: column wrap;
        justify-content: center;
        margin: 0 auto;
      }

      @media (min-width: 426px) {
        section {
          padding-top: 25%;
          padding-bottom: 60px;
        }

        .descs {
          flex-flow: row wrap;
        }
      }
    `}</style>
  </section>
)

export default class Index extends Component {
  render() {
    return (
      <Page>
        <Intro/>
        <Showcase />
        <Descriptions />
      </Page>
    )
  }
}
