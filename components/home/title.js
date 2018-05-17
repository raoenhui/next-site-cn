import RoundButton from '../round-button'

function Title() {
  return <section>
    <h1>React Applications<br /> Made Simple</h1>
    <p className='subtitle'><strong>Next.js</strong> is a lightweight framework for <br />static and server-rendered applications.</p>
    <RoundButton color='black' href='/learn'>Learn More</RoundButton>                
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

      br {
        display: none;
      }

      p {
        text-align: center;
        color: #555555;
        font-size: 16px;
        font-weight: 400;
        margin-top: 26px;
        margin-bottom: 46px;      
      }

      strong {
        color: #000000;
      }

      @media (max-width: 999px) {
        br {
          display: inline;
        }
      }
    `}</style>
  </section>
}

export default Title
