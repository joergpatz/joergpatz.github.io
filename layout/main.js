import Head from "next/head";

import minify from "../lib/minify.js";
import * as colors from "../layout/colors.js";

export default (props) => (
  <main>
    <Head>
      <title>Joerg Patzer - Senior Software Developer</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Senior Software Developer at bitgrip GmbH" />
      <meta name="language" content="en" />
      <meta name="author" content="Joerg Patzer" />
      <meta name="subject" content="Personal website" />
      <meta name="pagename" content="Joerg Patzer" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content={colors.black} />

      <link rel="shortcut icon" href="/static/favicon.ico" />

      {/* Schema JSON */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: minify(
            JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Joerg Patzer",
              image: "http://joergpatz.com/static/avatar.jpg",
              birthDate: "1981-04-09",
              email: "hello@joergpatz.com",
              gender: "Male",
              givenName: "Joerg",
              familyName: "Patzer",
              jobTitle: "Senior Software Developer",
              worksFor: {
                name: "bitgrip GmbH"
              }
            })
          )
        }}
      />
    </Head>

    {props.children}

    { /*language=CSS*/ }
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin: 0;
        font-size: 1rem;
        font-weight: 200;
      }
      ::selection {
        background-color: ${colors.black};
        color: ${colors.white};
      }
    `}</style>
  </main>
);
