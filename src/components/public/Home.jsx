import artwork1 from "../../assets/images/patterns.jpg";
import artwork2 from "../../assets/images/woman.png";
import artwork3 from "../../assets/images/bird.jpg";
import artist from "../../assets/images/artist.jpg";
import { useState, useEffect } from "react";

const Home = () => {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    function checkScrolled() {
      if (window.scrollY > 10) {
        setFixed(() => true);
      } else {
        setFixed(() => false);
      }
    }
    window.addEventListener("scroll", checkScrolled);
    return () => {
      window.removeEventListener("scroll", checkScrolled);
    };
  }, []);
  return (
    <>
      <nav
        className={`backdrop-blur-md bg-tranparent ${
          fixed && "fixed bg-black bg-opacity-30"
        } top-0 w-full h-[85px] flex items-center z-10`}
      >
        <div className="container mx-auto flex">
          <h1 className="text-5xl font-bold pattern clip text-transparent">
            Alphone
          </h1>
        </div>
      </nav>

      <section className="container mx-auto p-6 my-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <img src={artist} alt="Artist" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3 md:pl-10 mt-6 md:mt-0 flex justify-center items-center flex-col">
            <h2 className="text-2xl font-bold mb-4">About the Artist</h2>
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              consequat augue at ligula venenatis, id posuere mauris posuere. In
              consectetur, eros eget vestibulum auctor, libero erat tristique
              libero, vel tristique arcu libero a arcu. Nam viverra massa a
              purus fermentum, at auctor nisl facilisis. Aenean volutpat nisl id
              dolor cursus, ac vestibulum purus aliquet.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 w-full pattern">
        <h2 className="text-5xl font-bold text-center mb-12 text-orange-300">
          Portfolio
        </h2>
        <div className="container mx-auto  w-full">
          <div className="flex gap-4 justify-center items-center">
            <div className="portfolio-item rounded-md relative overflow-hidden trigger h-[405px] w-[405px]">
              <img
                src={artwork1}
                alt="Artwork 1"
                className="rounded-lg shadow-lg mb-4 absolute w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md h-0 transition-all duration-300 ease-in-out">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    Artwork Title 1
                  </h3>
                  <p className="text-gray-300">Medium, Year</p>
                </div>
              </div>
            </div>

            <div className="portfolio-item shadow rounded-md overflow-hidden relative trigger h-[405px] w-[405px] ">
              <img
                src={artwork2}
                alt="Artwork 2"
                className="mb-4 absolute h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md h-0 transition-all duration-300 ease-in-out">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    Artwork Title 2
                  </h3>
                  <p className="text-gray-300">Medium, Year1</p>
                </div>
              </div>
            </div>
            <div className="portfolio-item shadow rounded-md relative overflow-hidden trigger h-[405px] w-[405px] ">
              <div className="h-[405px] mb-4">
                <img
                  src={artwork3}
                  alt="Artwork 3"
                  className="mb-4 absolute w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 backdrop-blur-md h-0 transition-all duration-300 ease-in-out">
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    Artwork Title 3
                  </h3>
                  <p className="text-gray-300">Medium, Year</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto p-6 my-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact the Artist</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 p-2 rounded-lg"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Artist Name. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
