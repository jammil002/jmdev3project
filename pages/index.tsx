import Head from "next/head";
import Image from "next/image";
import jmDevLogo from "../public/logo.svg";
import Slider from "../components/slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>jm.dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <header>
          <nav className="flex justify-around py-5">
            <div className="navlogo">
              <h4 className="font-PressStart hover:text-purple-400">jm.dev</h4>
            </div>
            <ul className="navlogo text-white flex justify-around space-x-2 font-BebasNeue gap-5 underline underline-offset-2">
              <li>
                <a href="#sectionOneLink" className="hover:text-[#95afe5]">
                  About Me
                </a>
              </li>
              <li>
                <a href="#sectionTwoLink" className="hover:text-[#95afe5]">
                  Hiring
                </a>
              </li>
              <li>
                <a href="#sectionThreeLink" className="hover:text-[#95afe5]">
                  Skills
                </a>
              </li>
              <li>
                <a href="#sectionFourLink" className="hover:text-[#95afe5]">
                  Contact Me
                </a>
              </li>
              <li>
                {" "}
                <a href="../public/Resume.png" className="hover:text-[#95afe5]">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <div className="flex items-center justify-center pt-10 pb-5">
          <Image
            src={jmDevLogo}
            alt="JM.DEV Logo"
            width={300}
            height={300}
            priority
          />
        </div>

        <a id="sectionOneLink"></a>

        <section className="bg-[#414b5f]">
          <div className="pt-20 text-center">
            <h1 className="font-BebasNeue text-4xl pb-2 pt-5">About Me</h1>
            <div className="font-BebasNeue text-xl leading-2">
              <p>My name is James Miller.</p>
              <p>
                I am a current Computer Science student at Grand Canyon
                University.
              </p>
              <p>
                Currently, searching for a{" "}
                <span className="underline decoration-[#95afe5]">
                  summer internship
                </span>
                .
              </p>
              <p>
                You can get my resume{" "}
                <a href="../public/Resume.png">
                  <span className="text-[#95afe5] hover:text-red-400">
                    {" "}
                    here{" "}
                  </span>
                </a>{" "}
                or scroll down to learn more about me!
              </p>
            </div>
          </div>
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>

        <a id="sectionTwoLink"></a>

        <section className="bg-[#a799b7]">
          <div className="text-left">
            <h1 className="font-BebasNeue text-4xl pb-4">
              Why You Should Hire Me
            </h1>
            <Slider></Slider>
          </div>
        </section>
        <a id="sectionThreeLink"></a>
        <section className="bg-[#048a81]">
          <div className="text-right">
            <h1 className="font-BebasNeue text-4xl pb-2">Skills</h1>
            <h4 className="font-BebasNeue">Known Languages</h4>
            <h4 className="font-BebasNeue">Known Frameworks</h4>
            <h4 className="font-BebasNeue">Projects</h4>
          </div>
        </section>
        <section>
          <a id="sectionFourLink"></a>
          <div className="sectionFour pt-20 text-center">
            <h1 className="font-BebasNeue text-4xl pb-2">Contact Me</h1>
            <p>
              {" "}
              <a
                href="https://www.linkedin.com/in/james-millerw/"
                className="font-BebasNeue hover:text-[#95afe5]"
              >
                {" "}
                LinkedIn{" "}
              </a>
              |
              <a
                href="mailto:jam1211miller@gmail.com"
                className="font-BebasNeue hover:text-[#95afe5]"
              >
                {" "}
                Email{" "}
              </a>
              |
              <a
                href="https://www.instagram.com/jamesmiller.12/"
                className="font-BebasNeue hover:text-[#95afe5]"
              >
                {" "}
                Instagram{" "}
              </a>
            </p>
          </div>

          <div className="custom-shape-divider-top-1644025950">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                opacity=".25"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                opacity=".5"
                className="shape-fill"
              ></path>
              <path
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
