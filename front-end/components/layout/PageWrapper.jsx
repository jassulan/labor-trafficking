import React from "react";

import Metatags from "./Metatags";
import Layout from "./Layout";
export default function PageWrapper({ children }) {
  return (
    <>
      <Metatags />
      <Layout>{children}</Layout>
    </>
  );
}
