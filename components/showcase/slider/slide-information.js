import ExternalLink from '../../icons/external-link'

function SlideInformation({title, href}) {
  return <section>
    <h2>{title}</h2>
    <a target='_blank' href={href}>
      {href}
      <ExternalLink/>
    </a>
    <style jsx>{`
      section {
        padding: 0px 0 54px 0;
        margin: 0 auto;
        text-align: center;
      }

      h2 {
        font-size: 32px;
        font-weight: 200;
        margin-bottom: 0;
      }

      a {
        color: #0000FF;
        font-size: 14px;
        font-weight: 200;
        display: inline-flex;
        align-items: center;
        text-decoration: none;        
      }

      a :global(svg) {
        margin-left: 5px;
      }
    `}</style>
  </section>
}

export default SlideInformation
