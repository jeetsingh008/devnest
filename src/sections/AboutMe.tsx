import { FlipText } from "../components/magicui/flip-text";

const AboutMe = () => {
  return (
    <section id="about" className="w-full overflow-hidden">
      <div className="about-me-layout">
        {/* LEFT: TEXT */}
        <div className="about-me-text-part">
          <div className="section-heading">
            <span>About Me</span>
            <div className="h-[2px] mb-2 w-20 bg-cyan-500"></div>
          </div>
          <FlipText className="heading">My Story</FlipText>
          <div className="text">
            Hi, I’m <span className="font-semibold text-white">Jeet Singh</span>
            , a passionate{" "}
            <span className="font-semibold text-white">web developer</span>
            and MCA student at{" "}
            <span className="font-semibold text-white">BIT Mesra</span>. I enjoy
            turning ideas into{" "}
            <span className="font-semibold text-white">
              responsive <tr />
            </span>
            and{" "}
            <span className="font-semibold text-white">
              user-friendly web applications <tr />
            </span>
            using the{" "}
            <span className="font-semibold text-white">MERN stack</span> and
            modern tools like
            <span className="font-semibold text-white">
              {" "}
              React, Next.js, and Tailwind CSS
            </span>
            .
            <br />
            <br />I have hands-on experience through an
            <span className="font-semibold text-white">
              {" "}
              internship at Techavtar <tr />
            </span>
            and{" "}
            <span className="font-semibold text-white">
              freelance projects <tr />
            </span>
            where I built{" "}
            <span className="font-semibold text-white">
              production-ready applications <tr />
            </span>
            and websites for real clients. My goal is to grow as a
            <span className="font-semibold text-white">
              {" "}
              full-stack developer
            </span>
            , contribute to
            <span className="font-semibold text-white">
              {" "}
              impactful projects
            </span>
            , and keep learning new technologies to create better digital
            experiences.
          </div>
          <p className="text-cyan-500 text-sm xl:text-lg font-semibold tracking-wide text-center md:text-start">
            Connect@ : iamjeetsingh46@gmail.com
          </p>
          <div className="bg-transparent md:text-lg xl:text-xl border border-cyan-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-cyan-500/30 transition-colors duration-200">
            Download CV
          </div>
        </div>

        {/* RIGHT: AVATAR with Shine */}
        <div className="about-me-image-part relative">
          <div className="about-me-image-container relative overflow-hidden">
            <img src="/images/avtar.png" alt="jeet" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
