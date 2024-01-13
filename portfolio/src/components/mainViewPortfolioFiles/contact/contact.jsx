import { useRef } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  const contactSectionRef = useRef(null);

  return (
    <section
      id="contact-section"
      ref={contactSectionRef}
      className="w-screen h-screen flex flex-col justify-center items-center font-mono bg-black"
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold underline">
          Contact
        </h1>
        <p className="text-2xl md:text-2xl lg:text-2xl mt-4">
          Contact me if you want us to work together
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 items-center justify-center cursor-pointer mt-10">
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBmzrcwjqHVxNnWmZkrTHLkQlLZXzwMJhrwppGNKlRhLchLWCPHpFxQJSrSfkJPjqclHDnM"
          className="rounded-full border-2 border-green-700 bg-black p-2"
        >
          <BiLogoGmail className="text-4xl cursor-pointer text-green-700" />
        </a>
        <a
          href="https://github.com/Silrojua22"
          className="rounded-full border-2 border-green-700 bg-black p-2"
        >
          <AiFillGithub className="text-4xl cursor-pointer text-green-700" />
        </a>
        <a
          href="https://www.instagram.com/silviorodrigoj/"
          className="rounded-full border-2 border-green-700 bg-black p-2"
        >
          <AiFillInstagram className="text-4xl cursor-pointer text-green-700" />
        </a>
        <a
          href="https://www.linkedin.com/in/silvio-juarez"
          className="rounded-full border-2 border-green-700 bg-black p-2"
        >
          <AiFillLinkedin className="text-4xl cursor-pointer text-green-700" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
