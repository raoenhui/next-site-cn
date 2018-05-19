import CompanySlider from './showcase/company-slider'
import RoundButton from '../round-button'
import Image from '../image'

function Showcase() {
  return (
  <section className="showcase">
    <h2>The World's Leading Companies Use and Love Next.js</h2>
    <p>We're honored some of the most talented creatives out there build with Next.js.</p>
    <CompanySlider />
    <RoundButton className="button" color='white' href='/showcase'>View Showcase</RoundButton>
    <div className="image">
      <Image src="http://assets.zeit.co/image/upload/v1526678305/nextjs/home/showcase.png" width={1800}  height={1083} margin={0} oversize={false} />
    </div>
    <style jsx>{`
      .showcase {
        background-color: #FAFAFA;
        border-top: 1px solid #EAEAEA;
        padding-top: 92px;
        text-align: center;
        margin-bottom: -140px;
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
      }

      .showcase :global(a) {
        margin-left: auto;
        margin-right: auto;
      }

      .image {
        position: relative;
        z-index: 1;
        display: flex;
        max-width: 1000px;
        margin: 0 auto;
        box-shadow: 0px 25px 65px 0px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }

      .image :global(img) {
        box-shadow: 0px 23px 38px 0px rgba(0,0,0, 0.12)
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
