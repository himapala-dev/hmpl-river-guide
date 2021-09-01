import App from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import LayoutWrapper from "../components/layouts/layout-wrapper";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register(process.env.BACKEND_URL + "/sw.js").then(
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
      <NextNProgress
        color="#FFC000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <LayoutWrapper {...pageProps}>
        <Component {...pageProps} />
      </LayoutWrapper>
    </>
  );
}
