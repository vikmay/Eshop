import "@/styles/globals.css";
import Layouts from "@/layouts";

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
