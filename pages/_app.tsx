import type { AppProps } from "next/app";
import Router from "next/router";
import nProgress from "nprogress";
import { appWithTranslation } from "next-i18next";
import { wrapper } from "redux/store";
import DefaultLayout from "layout/DefaultLayout";
import global from "window-or-global";
import "nprogress/nprogress.css";
import "../scss/styles.scss";
import "../public/static/css/animate.css";
import { useEffect } from "react";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const windowGlobal = global.window as any;
    new windowGlobal.WOW().init();
  }, []);

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}
export default wrapper.withRedux(appWithTranslation(MyApp));
