import Link from 'next/link'

function ShowcaseLink({item, children}) {
  return <Link href={`/showcase?item=${item.internalUrl}`} as={`/showcase/${item.internalUrl}`} replace>
    {children}
  </Link>
}

export default ShowcaseLink
