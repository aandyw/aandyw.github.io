import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faXTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-12 pb-6">
      {/* Header Section */}
      <header className="mb-4">
        <h1 className="text-4xl mb-2 text-foreground">
          <span className="font-extrabold">Andy</span> Wu
        </h1>
        <p>Trying to build new things ツ</p>
      </header>

      {/* Profile Section */}
      <div className="float-right ml-6">
        <figure>
          <Image
            src="/assets/img/profile-image.jpg"
            alt="Profile image"
            className="w-56 h-56 object-cover rounded-sm shadow-lg"
            width={224}
            height={224}
          />
        </figure>

        <div className="social mt-4">
          <div className="contact-icons flex items-center justify-center space-x-4">
            <a
              href="mailto:dev.aandyw@gmail.com"
              className="text-foreground hover:text-accent-purple transition-colors"
              title="email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </a>

            <a
              href="https://scholar.google.ca/citations?user=BuyZ4TkAAAAJ"
              className="text-foreground hover:text-accent-purple transition-colors"
              title="Google Scholar"
              rel="external nofollow noopener"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="w-6 h-6" />
            </a>

            <a
              href="https://github.com/aandyw"
              className="text-foreground hover:text-accent-purple transition-colors"
              title="GitHub"
              rel="external nofollow noopener"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>

            <a
              href="https://twitter.com/_aandyw"
              className="text-foreground hover:text-accent-purple transition-colors"
              title="Twitter"
              rel="external nofollow noopener"
              target="_blank"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/aandyw"
              className="text-foreground hover:text-accent-purple transition-colors"
              title="LinkedIn"
              rel="external nofollow noopener"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="clearfix">
        <article className="space-y-4 text-foreground leading-6 text-base">
          <p>
            Hi there! I'm a final year student studying Mathematics and Computer
            Science at the{" "}
            <a
              href="https://uwaterloo.ca"
              className="text-accent-purple hover:text-accent-purple-hover hover:underline transition-colors"
            >
              University of Waterloo
            </a>
            .
          </p>

          <p>
            This portfolio was created to both showcase my ongoing{" "}
            <Link
              href="/projects"
              className="text-accent-purple hover:text-accent-purple-hover hover:underline transition-colors"
            >
              projects
            </Link>{" "}
            and{" "}
            <Link
              href="/cv"
              className="text-accent-purple hover:text-accent-purple-hover hover:underline transition-colors"
            >
              experiences
            </Link>{" "}
            while also giving me a space to track the things I've learned. This
            could be through blog posts, project showcases, or something else.
            My goal is to "try" (heavy emphasis on try) to be consistent with
            publishing something without needing something to be perfect.
          </p>

          <p>
            Hopefully you didn't spend too long reading this...but if you're
            already here you might as well look around ツ
          </p>
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
