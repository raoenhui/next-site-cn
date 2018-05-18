import CompanySlider from './showcase/company-slider'
import RoundButton from '../round-button'

function Showcase() {
  return (
  <section className="showcase">
    <h2>The World's Leading Companies Use and Love Next.js</h2>
    <p>We're honored some of the most talented creatives out there build with Next.js.</p>
    <CompanySlider />
    <RoundButton className="button" color='white' href='/showcase'>View Showcase</RoundButton>
    <style jsx>{`
      .showcase {
        background-color: #FAFAFA;
        border-top: 1px solid #EAEAEA;
        padding-top: 92px;
        text-align: center;        
      }
      h2 {
        font-size: 35px;
        font-weight: 200;
        margin: 0;
        padding-left: 30px;
        padding-right: 30px;
      }
      p {
        color: #999999;
        line-height: 24px;
        font-size: 14px;
        margin-top: 13px;
        margin-bottom: 66px;
        padding-left: 30px;
        padding-right: 30px;        
      }
      .showcase :global(.button) {
        margin-top: 57px;
        margin-bottom: 57px;
        display: inline-flex;
      }

      @media (max-width: 768px) {
        h2 {
          font-size: 32px;
        }
      }
    `}</style>
  </section>
)
}

export default Showcase
