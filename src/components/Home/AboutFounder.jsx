import FounderImage from "./../../assets/founder.jpeg";
import { aboutFounderText, founderSocialLinks } from "./content";

const AboutFounder = () => {
  return (
    <section className="about_section">
      <div className="mt-24 py-6 px-5 md:px-20 flex flex-col space-y-12 items-center justify-center">
        <div className="flex flex-col items-center   md:flex-row md:items-start justify-between space-x-2 space-y-8 md:space-y-0">
          <div className="md:1/2 flex flex-col items-between justify-between space-y-3 text-white    ">
            <img
              src={FounderImage}
              className="w-[550px] h-84 rounded"
              alt="founder image"
            />
            <h1 className="text-4xl font-bold text-center ">Vishal Rajput</h1>
          </div>
          <div className="md:w-1/2 flex text-[1rem]  -mt-8 flex-col items-start justify-between space-y-5 text-white  p-1 ">
            <div className="text-left font-bold text-5xl text-white flex items-start md:items-start justify-center flex-col space-y-3 ">
              <h1>About The Founder</h1>
              <div className="w-28 h-2 bg-[#687eff] rounded"></div>
            </div>
            {aboutFounderText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <div className="flex flex-row items-center justify-start space-x-3">
              {founderSocialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
