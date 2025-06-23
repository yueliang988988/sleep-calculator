// src/pages/_app.tsx
import Head from "next/head"
import Script from "next/script"
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Wake Window Calculator – Free Baby Nap Planner</title>
        <meta name="description" content="Instantly calculate your baby's wake windows and build a personalized nap schedule. Totally free." />
        <link rel="canonical" href="https://www.wakewindowcalc.com/" />
        <meta property="og:title" content="Wake Window Calculator – Baby Nap Schedule" />
        <meta property="og:description" content="Use our free wake-window calculator to plan naps & bedtime for babies 0-24 months." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MPW8GW0MEE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MPW8GW0MEE');
        `}
      </Script>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.browser) return ""; // Browser should use current path
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);
