import App from "next/app";
// import Cookie from "js-coookie";

export default class MyApp extends App {
  componentDidMount() {
    if ("geolocation" in navigator) {
      // check if geolocation is supported/enabled on current browser
      const success = (position) => {
        // for when getting location is a success
        // Cookie.set('latitude', position.coords.latitude);
        // Cookie.set('longitude', position.coords.longitude);
        document.cookie = `latitude=${position.coords.latitude}`;
        document.cookie = `longitude=${position.coords.longitude}`;
      };
      const error = (error_message) => {
        // for when getting location results in an error
        console.error(
          "An error has occured while retrieving location",
          error_message
        );
      };
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      // geolocation is not supported
      // get your location some other way
      console.log("geolocation is not enabled on this browser");
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }
