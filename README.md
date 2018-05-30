# Next.js website

The official website for Next.js

## Contribution

To submit a feature, bug fix, or enhancement to the website proceed as follows:

1. Clone this repo
2. Within your terminal, run `yarn` to install the dependencies
3. Once the dependencies are installed, run `yarn dev` to start the dev server on `localhost:3000`

We really appreciate any contribution.

## Creating a showcase image svg

- `brew install go`
- `go get -u github.com/fogleman/primitive`
- `primitive -i IMAGEHERE.png -o OUTPUTHERE.svg -n 30 -s 1280` Replace `IMAGEHERE` and `OUTPUTHERE` with the actual image.
- Open the resulting svg file, copy the contents
- go to https://dopiaza.org/tools/datauri/index.php
- Select `provide text` and paste the svg contents
- Uncheck the `use base64 encoding` box
- Select `Explicitly specify mime type` and set it to `image/svg+xml`
- Copy the results into `./showcase-manifest.js` under the `data` key.

## Related Repositories

- [Next.js](https://github.com/zeit/next.js)
- [Next.js Plugins](https://github.com/zeit/next-plugins)

