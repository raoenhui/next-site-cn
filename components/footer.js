import Icons from './icons'

export default () => (
  <footer>
    <div className='container'>
      <div className='contact'>
        <span className='name'>Next.js</span><span className='email'>— team@nextjs.org</span>
      </div>
      <div className='license'>
        <span>MIT Licensed. Copyright © 2018 ZEIT, Inc. All rights reserved.</span>
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
      .github-ci {
        border-left: 1px solid #EAEAEA;
        padding-left: 20px;
        opacity: 0.4;
      };
      .github-ci:hover {
        opacity: 1.0;
        cursor: pointer;
      };
    `}</style>
  </footer>
)
