import Icons from './icons'

export default () => (
  <footer>
    <div className='container'>
      <div className='contact'>
        <span className='name'>Next.js</span>
      </div>
      <div className='license'>
        <span>MIT Licensed. Copyright © 2018 ZEIT, Inc. <br className='brk' />All rights reserved.</span>
      </div>
      <div className='github-ci'>
        <Icons.GithubCI />
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
      .container {
        position: relative;
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
      .github-ci {
        border-left: 1px solid #EAEAEA;
        padding-left: 20px;
        opacity: 0.4;
        transition: .2s ease-out;
      };
      .github-ci:hover {
        opacity: 1.0;
        cursor: pointer;
        transition: .2s ease-out;
      };
      .brk {
        display: none;
      };
      @media (max-width: 999px) {
        .container {
          width: 100%;
          padding: 62px 0 124px 0;
        };
        .contact {
          display: flex;
          align-items: center;
        };
        .license {
          position: absolute;
          bottom: 62px;
        };
        .github-ci {
          margin-left: 14px;
        };
        .brk {
          display: inline-block;
        };
      }
    `}</style>
  </footer>
)
