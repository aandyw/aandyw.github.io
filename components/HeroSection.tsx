import Image from "next/image";
import profileImage from "@/assets/profile-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-12 pb-6">
      <div className="flex flex-col lg:flex-row items-start gap-12">
        <div className="flex-1">
          <h1 className="text-4xl mb-4 text-foreground"><span className="font-bold">Andy</span> <span className="font-light">Wu</span></h1>
          
          <div className="space-y-4 text-foreground font-light leading-relaxed text-sm">
            <p>
            Trying to build new things ツ
            </p>
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
              <a 
                href="/projects" 
                className="text-accent-purple hover:text-accent-purple-hover hover:underline transition-colors"
              >
                projects
              </a>{" "}
              and{" "}
              <a 
                href="/cv" 
                className="text-accent-purple hover:text-accent-purple-hover hover:underline transition-colors"
              >
                experiences
              </a>{" "}
              while also giving me a space to track the things I've learned. 
              This could be through blog posts, project showcases, or something else. 
              My goal is to "try" (heavy emphasis on try) to be consistent with publishing 
              something without needing something to be perfect.
            </p>
            
            <p>
              Hopefully you didn't spend too long reading this...but if you're already here 
              you might as well look around ツ
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-end space-y-6">
          <div>
            <Image 
              src={profileImage}
              alt="Profile image"
              className="w-48 h-48 object-cover rounded-sm shadow-lg"
              width={192}
              height={192}
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="mailto:dev.aandyw@gmail.com" 
              className="text-foreground hover:text-accent-purple transition-colors"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
            </a>
            
            <a 
              href="https://scholar.google.ca/citations?user=BuyZ4TkAAAAJ" 
              className="text-foreground hover:text-accent-purple transition-colors"
              aria-label="Google Scholar"
            >
              <FontAwesomeIcon icon={faGraduationCap} className="w-5 h-5" />
            </a>
            
            <a 
              href="https://github.com/aandyw" 
              className="text-foreground hover:text-accent-purple transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
            </a>
            
            <a 
              href="https://twitter.com/aandyw" 
              className="text-foreground hover:text-accent-purple transition-colors"
              aria-label="X (Twitter)"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5" />
            </a>
            
            <a 
              href="https://linkedin.com/in/aandyw" 
              className="text-foreground hover:text-accent-purple transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;