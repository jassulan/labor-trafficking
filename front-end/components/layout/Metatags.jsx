import React from "react";
import Head from "next/head";

const Metatags = ({
  title = "Home",
  url = "http://www.traffickingresult.com/",
  image = "http://www.traffickingresult.com/logo.jpg",
  description = "Labor Trafficking Identification Tool",
}) => (
  <Head>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta httpEquiv="content-language" content="en" />
    <title key="title">{`${title} | abor Trafficking Identification Tool`}</title>
    <meta name="description" content={description} key="description" />
    <meta name="keywords" content="abor Trafficking Identification Tool" />
    <meta name="robots" content="index, follow" />
    <meta name="referrer" content="no-referrer-when-downgrade" />

    {/* <!-- Open Graph --> */}
    <meta
      name="og:title"
      content={`${title} | Labor Trafficking Identification Tool`}
    />
    <meta name="og:description" content={description} key="ogDescription" />
    <meta name="og:image" content={image} key="ogImage" />
    <meta property="og:determiner" content="the" />
    <meta property="og:url" content={url} key="ogURL" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:locale:alternate" content="en_US" />
    <meta
      property="og:site_name"
      content="Labor Trafficking Identification Tool"
    />
    <meta property="og:type" content="website" />
    <meta
      name="twitter:description"
      content={description}
      key="twitterDescription"
    />
  </Head>
);

export default Metatags;
