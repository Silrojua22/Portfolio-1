import { useRef } from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  const contactSectionRef = useRef(null);

  return (
    <section
      id="contact-section"
      ref={contactSectionRef}
      className="w-screen h-screen flex flex-col justify-center items-center font-mono bg-black border-2 border-green-700"
    >
      <div className="text-center">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold">Contact</h1>
      </div>
      <div>
        <p>Hola estas son las desc</p>
      </div>
      <div className="grid grid-cols-4 gap-4 items-center justify-center cursor-pointer mt-4">
        <div className="rounded-full border-2 border-green-700 bg-black p-2">
          <BiLogoGmail className="text-xl cursor-pointer text-green-700" />
        </div>
        <div className="rounded-full border-2 border-green-700 bg-black p-2">
          <AiFillGithub className="text-xl cursor-pointer text-green-700" />
        </div>
        <div className="rounded-full border-2 border-green-700 bg-black p-2">
          <AiFillInstagram className="text-xl cursor-pointer text-green-700" />
        </div>
        <div className="rounded-full border-2 border-green-700 bg-black p-2">
          <AiFillLinkedin className="text-xl cursor-pointer text-green-700" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
