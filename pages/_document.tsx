import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="Operation Medical Care is a non-profit made up of medical doctors, nurses, pharmacists, dietitians, business owners, software engineers and everyday people all committed to bringing healthcare to the remote villages of Belize."
          />
          <meta
            property="og:url"
            content="https://www.operationmedicalcare.org/images/opengraph/og-image-1.jpg"
          />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Operation Medical Care" />
          <meta
            property="og:description"
            content="Operation Medical Care is a non-profit made up of medical doctors, nurses, pharmacists, dietitians, business owners, software engineers and everyday people all committed to bringing healthcare to the remote villages of Belize."
          />
          <meta
            property="og:image"
            content="https://operationmedicalcare.com/ogp.jpg"
          />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="650" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
