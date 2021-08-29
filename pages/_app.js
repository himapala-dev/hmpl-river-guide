import App from "next/app";
import { useEffect } from "react";
import LayoutWrapper from "../components/layouts/layout-wrapper";
import "../styles/globals.scss";

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
        navigator.serviceWorker.register("../service-worker.js").then(
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
    <LayoutWrapper {...pageProps}>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}
