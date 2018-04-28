import {Component} from 'react'
import Link from 'next/link'
import Page from '../components/page'
import Icons from '../components/icons'
import RoundButton from '../components/round-button'

const Description = ({title, children, href}) => (
  <aside>
    <Link href={href}>
      <a>
        <h2>{title}</h2>
        <p>{children}</p>
        <div className='footer'>READ MORE</div>
      </a>
    </Link>
    <style jsx>{`
      aside {
        max-width: 273px;
        margin-bottom: 24px;
        padding: 25px 28px 25px 28px;
        border: 1px solid #EAEAEA;
        border-radius: 5px;
        margin-right: 0px;
      };
      aside:hover {
        border: 1px solid #000000;
        cursor: pointer;
        transition: .2s ease-out;
      };
      aside a {
        padding: 0;
        padding-right: 38px;
        color: #000000;
        text-transform: none;
        text-decoration: none;
        border-bottom: none;
        transition: .2s ease-out;
        display: flex;
        flex-direction: column;
        min-height: 230px;
      };
      h2 {
        padding: 0px;
        margin: 0px 0 0 0px;
        font-weight: 400;
        font-size: 20px;
      };
      span {
        width: 40px;
        height: 40px;
        float: left;
      };
      p {
        color: rgb(153, 153, 153);
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        color: #999999;
        flex: 1;
      };
      .footer {
        font-size: 12px;
        font-weight: 200;
        color: #000;
        line-height: 14px;
      };
      @media (min-width: 1000px) {
        aside {
          margin-right: 20px;
        };
      }
      `}</style>
  </aside>
)

export default class Enterprise extends Component {
  render() {
    return (
      <Page>
        <section>
          <div className='hero flex-column'>
            <h1 className='title'>
              Enterprise Support
            </h1>
            <div className='slogan'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </div>
          </div>
          <div className='descriptions flex-column'>
            <Description title='Priority Support'  href='https://zeit.co/teams/next-js/settings/add-ons/priority-support'>
              Emails to our support queue are given priority and are guaranteed to be handled within 24 hours.
            </Description>
            <Description title='Advanced Priority Support' href='https://zeit.co/teams/next-js/settings/add-ons/advanced-priority-support'>
              Emails to our support queue are given priority and are guaranteed to be handled within 12 hours.
            </Description>
            <Description title='Static Websites' href='https://zeit.co/teams/next-js/settings/add-ons/live-support'>
              Your team will have direct access to core engineers in our corporate Slack with a dedicated channel to maintain and archive your support requests and their respective bug fixes.
            </Description>
          </div>
          <div className='footer flex-column'>
            <p>For more information<br className='brk' /> about <span className='bold'>Next.js Enterprise Support</span></p>
            <RoundButton color='black' href='mailto:support@zeit.co'>Contact us</RoundButton>
          </div>
        </section>
        <style jsx>{`
          section {
            margin: 16px auto 63px auto;
          };
          .flex-column {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .title {
            font-size: 44px;
            font-weight: 200;
            text-align: center;
          };
          .slogan {
            font-size: 14px;
            font-weight: 200;
            text-align: center;
            color: #666666;
            max-width: 284px;
            line-height: 24px;
          };
          .descriptions {
            margin: 50px auto 0 auto;
          };
          .footer {
            margin: 27px auto 0 auto;
            color: #666666;
            font-size: 18px;
          };
          .footer p {
            margin: 0 0 29px 0;
            text-align: center;
            line-height: 30px
          };
          .bold {
            color: #000000;
          };
          .brk {
            display: inline-block;
          };
          @media (min-width: 1000px) {
            section {
              display: flex;
              flex-direction: column;
              margin: 154px auto 126px auto;
            };
            .slogan {
              max-width: 749px;
            };
            .descriptions {
              flex-direction: row;
              margin: 98px auto 0 auto;
            };
            .footer {
              margin: 84px auto 0 auto;
            };
            .brk {
              display: none;
            };
          }
        `}</style>
      </Page>
    )
  }
}
