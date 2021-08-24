import App from "next/app";
import LayoutWrapper from "../components/layouts/layout-wrapper";

import "../styles/globals.scss";

export default class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   return {
  //     pageProps: {
  //       // Call page-level getInitialProps
  //       ...(Component.getInitialProps
  //         ? await Component.getInitialProps(ctx)
  //         : {})
  //     }
  //   };
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    );
  }
}
