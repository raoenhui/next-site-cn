import Head from 'next/head'

export default ({ children, ...props }) => (
  <Head>
    <title>{`${props.title} - Next.js Documentation`}</title>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <meta
      name="twitter:card"
      content={props.image ? 'summary_large_image' : 'summary'}
    />
    <meta name="twitter:site" content="@zeithq" />
    <meta
      name="og:title"
      content={props.ogTitle || props.title}
    />
    <meta
      name="og:url"
      content={props.url || 'https://zeit.co/now'}
    />
    {props.description ? (
      <meta name="description" content={props.description} />
    ) : null}
    {props.ogDescription ? (
      <meta name="og:description" content={props.ogDescription} />
    ) : (
      <meta name="og:description" content={props.description} />
    )}
    <meta
      name="og:image"
      content={
        props.image || `/static/images/twitter-card.png`
      }
    />
    {props.video
      ? [
        <meta name="og:type" content="video" key="0" />,
        <meta name="og:video" content={props.video} key="1" />,
        <meta name="og:video:type" content="video/mp4" key="2" />
      ]
      : null}

    {/*
      Favicons
    */}
    <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
    <link rel="manifest" href="/static/favicon/site.webmanifest" />
    <link rel="mask-icon" href="/static/favicon/safari-pinned-tab.svg" color="#000000" />
    <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
    <meta name="msapplication-TileColor" content="#000000" />
    <meta name="msapplication-config" content="/static/favicon/browserconfig.xml" />
    <meta name="theme-color" content="#000" />

    { children }
  </Head>
)
