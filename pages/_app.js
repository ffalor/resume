import Head from "next/head";
import "../styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faGithub,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faBuilding,
  faCalendarAlt,
  faUniversity,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faLinkedin,
  faGithub,
  faEnvelope,
  faMapMarkerAlt,
  faBuilding,
  faCalendarAlt,
  faUniversity,
  faGraduationCap,
  faAws
);

export default function App({ Component, pageProps }) {
  return (
    <main>
      <Head>
        <meta
          name="viewport"
          content={
            "width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
          }
        />
      </Head>
      <Component {...pageProps} />
    </main>
  );
}
