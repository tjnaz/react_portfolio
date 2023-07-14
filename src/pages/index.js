import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import profilePic from "../../public/images/profile/profile_pic-removebg-preview.png";
import AnimatedText from "../components/AnimatedText";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout>
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="TJ" className="w-full h-auto" />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div>
                <Link
                  href="/thaj_anaz-daraz-05-23.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark"
                >
                  Resume
                </Link>
                <Link href="mailto:anaz.thaj@gmail.com">Email</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
