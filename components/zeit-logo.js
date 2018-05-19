import Link from 'next/link'
import ZeitLogoOutline from './icons/zeit-logo-outline'

export default () => <div>
  <Link href='https://zeit.co/'>
    <a target='_blank' rel="noopener" className="zeit-logo">
      <ZeitLogoOutline />
    </a>
  </Link>
  <style jsx>{`
    .zeit-logo :global(svg) {
      transition: fill 0.2s ease;
    }

    .zeit-logo:hover :global(svg) {
      fill: black;
    }
  `}</style>
</div>