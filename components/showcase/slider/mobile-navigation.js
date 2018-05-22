import ShowcaseLink from './showcase-link'
import ArrowPrevious from '../../icons/arrow-previous'
import ArrowNext from '../../icons/arrow-next'

function MobileNavigation ({prev, item}) {
  return <ShowcaseLink item={item}>
      <a className={prev ? 'previous' : null}>
        {prev ? <ArrowPrevious /> : <ArrowNext />}
        <style jsx>{`
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #FFFFFF;
            border: none;
            width:100%;
            height: auto;
            outline: none;
            cursor: pointer;
            padding-top: 29px;
            padding-bottom: 29px;
            padding-left: 50px;
            padding-right:50px;
          }

          a :global(svg) :global(g) {
            stroke: #000;
          }
        `}</style>
      </a>
    </ShowcaseLink>
    
}

export default MobileNavigation
