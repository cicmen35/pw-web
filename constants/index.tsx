import { Phone, Mail, Building2 } from "lucide-react"; 

// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home_page', label: 'Home' },
    { href: '/publications', key: 'list_of_publications', label: 'Publications' },
    { href: '/cv_wo_publications', key: 'cv_wo_publications', label: 'CV' },
    { href: '/time_table', key: 'time_table', label: 'Teaching' },
    { href: '/current_or_past_researches', key: 'current_or_past_researches', label: 'Research' },
];


const Main = () => {
  return (
    <main className="min-h-screen  px-8 py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to the Personal Web Page of Pavel Eichler
        </h1>
      </header>

      {/* Video Section */}
      <section className="flex justify-center mb-16">
        <video
          className="w-full rounded-lg shadow-lg "
          src="/video.mp4" 
          autoPlay
          loop
          muted
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </section>

      {/* About This Site Section */}
      <section className="flex flex-col items-center text-center mb-16 ">
        <div className="max-w-2xl space-y-6 ">
          <h2 className="text-4xl font-semibold text-blue-700">About This Site</h2>
          <p className="text-lg text-gray-700  mb-6 py-3">
            Discover my latest research, teaching schedules and academic publications.
            This site serves as a hub for all my professional activities.
          </p>
          <a
            href="#about"
            className=" bg-gradient-to-r from-green-400 to-blue-400 text-black px-6 py-3 rounded-lg shadow-md  mt-8"
          >
            Learn More
          </a>
        </div>
      </section>


<section id="about" className="flex flex-col items-center justify-between gap-12 text-center">
 
        <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-gray-800">Ing. Pavel Eichler, Ph.D.</h2>
          <p className="text-lg text-gray-600">Scientific Researcher | SOČ Supervisor</p>

        <div className="flex justify-center">
          <img
            src="/eichler.jpg"
            alt="Professor Pavel Eichler"
            className=" lg:w-64 lg:h-64  border-4 border-blue-600 shadow-lg"
          />
        </div>
          {/* Contact Info with icons */}
          <div className="text-lg text-gray-600 space-y-2">
            <p className="flex items-center gap-4 justify-center">
              <Phone className="text-blue-600" size={20} /> {/* Phone icon */}
              Phone: +420 778 547 412
            </p>
            <p className="flex items-center gap-4 justify-center">
              <Mail className="text-blue-600" size={20} /> {/* Email icon */}
              Email:{" "}
              <a
                href="mailto:pavel.eichler@fjfi.cvut.cz"
                className="text-blue-500 underline hover:text-blue-700 transition"
              >
                pavel.eichler@fjfi.cvut.cz
              </a>
            </p>
            <p className="flex items-center gap-4 justify-center">
              <Building2 className="text-blue-600" size={20} /> {/* Office icon */}
              Office: Děčín, Pohraniční, Room 211
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;

