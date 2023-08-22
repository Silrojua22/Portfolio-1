import { useEffect, useState } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi! My name is Silvio Rodrigo Juarez";

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setTypedText(fullText);
        }, 2000);
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className=" font-mono min-h-screen w-screen flex justify-center items-center overflow-hidden">
      <div className="text-center">
        <h1 className="text-4xl">
          {typedText}
          <br />
        </h1>
        <div className="my-4">
          {typedText === fullText && (
            <div className="animate-jump animate-once animate-duration-50000 animate-delay-20000 inline-block">
              <h1 className="text-4xl">Full Stack Web Developer.</h1>
            </div>
          )}
        </div>
        <p>
          <a rel="noreferrer" href="/about">
            About me
          </a>
        </p>
      </div>
    </section>
  );
};

export default Home;
