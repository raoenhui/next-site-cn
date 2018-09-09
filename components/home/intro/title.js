import RoundButton from '../../round-button'

function Title() {
  return <section>
    <h1>使React应用<br/> 更简单</h1>
    <p className='subtitle'><strong>Next.js</strong> 是一个轻量级的 React 服务端渲染应用框架。</p>
    <RoundButton color='black' href='/docs'>文档</RoundButton>
    <style jsx>{`
      section {
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      h1 {
        text-align: center;
        font-size: 56px;
        font-weight: 300;
        margin: 0;
        padding: 0;
      }
      p {
        text-align: center;
        color: #555555;
        font-size: 16px;
        font-weight: 400;
        margin-top: 26px;
        margin-bottom: 46px;
        margin-left: 15px;
        margin-right: 15px;
      }
      strong {
        color: #000000;
      }
      br {
        display: none;
      }
      @media (max-width: 768px) {
        h1 {
          font-size: 32px;
        }
      }

      @media(max-width: 450px) {
        br {
          display: inline;
        }
      }
    `}</style>
  </section>
}

export default Title
