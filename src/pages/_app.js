import "@/app/globals.scss";
// libs styles
import "swiper/css";
// layouts components
import Layouts from "@/layouts";
import Provider from "@/components/providers";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Provider>
  );
}

export default MyApp;
