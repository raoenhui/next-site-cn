import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import Link from 'next/link'
import ShowcaseManifest from '../components/showcase-manifest'

export default class MyDocument extends Document {
  static async getInitialProps({pathname, renderPage}) {
    const ctx =  {
      ...renderPage(),
      styles: flush()
    }

    if (pathname === '/showcase') {
      // prefetching three items of images.
      // rest of images will be pending if they are listed
      ctx.linksPrefetch = ShowcaseManifest.manifest
        .slice(0, 3)
        .map((s, i) => <link key={i} rel='prefetch' href={`${s.src}`} />)
    }

    return ctx
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {this.props.linksPrefetch}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
