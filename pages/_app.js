import App from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { useEffect, useState } from "react";
import LayoutWrapper from "../components/layouts/layout-wrapper";
import "../styles/globals.scss";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeComplete", nProgress.done);
Router.events.on("routeChangeError", nProgress.done);

export default function MyApp({ Component, pageProps }) {
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

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    <>
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}
