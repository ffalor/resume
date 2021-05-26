import Projects from "../components/projects";
import Experience from "../components/experience";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import resumeData from "../public/resumeData.json";
import Header from "../components/header";
import Headroom from "react-headroom";
import Profile from "../components/profile";
import About from "../components/about";
import Education from "../components/education";
import Skills from "../components/skills";

export default function Resume({ allPostsData }) {
  return (
    <main class="bg-gray-800 min-h-screen">
      <Head>
        <title>Resume</title>
      </Head>
      <Headroom style={{ position: "fixed" }}>
        <Header />
      </Headroom>
      <div class="mt-6 max-w-screen-xl md:flex mx-auto">
        <div class="md:w-1/3 p-2 relative">
          <Profile data={resumeData} />
        </div>
        <div class="md:w-2/3 p-2 w-full">
          <About data={resumeData} />
          <Experience data={resumeData} />
          <Education data={resumeData} />
          <Skills data={resumeData} />
          <Projects data={resumeData} />
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
