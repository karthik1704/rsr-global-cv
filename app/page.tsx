import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import {
  ChevronRight,
  Mouse,
  Search,
  MapPin,
  Volume2,
  ArrowRight,
  CalendarDays,
  Newspaper,
  Timer,
} from "lucide-react";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center flex-col">
      <Navbar />
      <Header/>
     
      {/* <section className="w-3/5 flex flex-col justify-center gap-10 my-7">
        <div className="w-full flex flex-col items-center gap-6 text-blue-900">
          <div className="text-5xl">
            <Mouse className="text-5xl" />
          </div>
          <h3 className="text-4xl font-bold">Europass tools</h3>
          <ul className="w-full flex items-center justify-evenly text-xl font-bold">
            <li className="flex gap-1 items-center">
              Create your Europass CV <ChevronRight />
            </li>
            <li className="flex gap-1 items-center">
              Create Cover Letter <ChevronRight />
            </li>
            <li className="flex gap-1 items-center">
              Test your digital skills <ChevronRight />
            </li>
          </ul>
        </div>

        <div className="w-full flex flex-col items-center gap-7 text-blue-900">
          <h3 className="text-6xl font-bold mb-5">find</h3>
          <ul className="w-3/5 flex items-center justify-evenly text-xl">
            <li>Jobs</li>
            <li>Courses</li>
            <li>Information</li>
          </ul>
          <form className="w-full flex justify-evenly" action="">
            <div className="w-2/5 relative flex items-center">
              <input
                className="py-2 px-16 w-full rounded-3xl border border-blue-800 text-xl text-slate-800 outline-orange-400"
                type="text"
                placeholder="Keyword"
              />
              <Search className="absolute top-3 left-4" />
            </div>
            <div className="w-[30%] relative">
              <input
                className="py-2 px-16 w-full rounded-3xl border border-blue-800 text-xl text-slate-800 outline-orange-400"
                type="text"
                placeholder="Location"
              />
              <MapPin className="absolute top-3 left-4" />
            </div>
            <button
              className="w-[15%] py-2 px-6 rounded-3xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-xl font-bold text-white"
              type="button"
            >
              Find
            </button>
          </form>
        </div>
      </section> */}

      <section className="w-full h-[800px]  flex flex-col items-center justify-center  mt-8 clipy_path_two">
        <div className="w-3/5">
          <div className="flex flex-col gap-14 justify-center">
            <h2 className="w-full text-5xl text-center font-bold">
              3 million register RSR users
            </h2>
            <div className="flex items-start justify-evenly">
              <p className="w-3/5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Excepturi unde cumque dolore. Enim consequuntur modi molestias
                voluptas? Dolor voluptatem neque quia optio rem, saepe omnis.
                Ipsa repellat quasi laboriosam nisi modi quae corrupti, magni
                vel non est quos iure nesciunt nam aspernatur eligendi
                voluptatum quidem, eos accusantium unde sequi nostrum.
              </p>
              <div className="h-80 aspect-square rounded-md truncate">
                <img
                  className="h-full w-full object-cover"
                  src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg"
                  alt="profil-pic"
                />
              </div>
            </div>
          </div>
          <button className="py-4 px-9 bg-orange-400 rounded-3xl text-white text-md font-bold hover:bg-orange-300 hover:text-slate-700 transition-colors hover:ease-in-out">
            Test your digital skill now
          </button>
        </div>
      </section>

      <section className="w-3/5 flex flex-col gap-6 my-5">
        <h3 className="text-3xl text-blue-800 text-center">Information</h3>
        <div className="w-full flex items-center justify-evenly gap-5">
          <div className="h-96 w-4/12 bg-gray-100 flex flex-col justify-between">
            <div className="h-1/2 w-full  p-4">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg"
                alt="nature"
              />
            </div>

            <p className="text-left px-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              cum, mollitia deleniti labore sed illum.
            </p>
            <ul className="flex justify-between items-center px-5 py-3">
            <li className="flex gap-2  text-blue-800 font-bold">
            <Newspaper />
            Information
            </li>
            <li className="text-white p-1 rounded-full bg-teal-800 cursor-pointer">
                  <ArrowRight />
                </li>
                </ul>
          </div>

          <div className="h-96 w-4/12 bg-gray-100 flex flex-col justify-between">
            <div className="h-1/2 w-full  p-4">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg"
                alt="nature"
              />
            </div>

            <p className="text-left px-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              cum, mollitia deleniti labore sed illum.
            </p>
            <ul className="flex justify-between items-center px-5 py-3">
            <li className="flex gap-2  text-blue-800 font-bold">
            <Newspaper />
            Information
            </li>
            <li className="text-white p-1 rounded-full bg-teal-800 cursor-pointer">
                  <ArrowRight />
                </li>
                </ul>
          </div>

          <div className="h-96 w-4/12 bg-gray-100 flex flex-col justify-between">
            <div className="h-1/2 w-full  p-4">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg"
                alt="nature"
              />
            </div>

            <p className="text-left px-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              cum, mollitia deleniti labore sed illum.
            </p>
            <ul className="flex justify-between items-center px-5 py-3">
            <li className="flex gap-2  text-blue-800 font-bold">
            <Newspaper />
            Information
            </li>
            <li className="text-white p-1 rounded-full bg-teal-800 cursor-pointer">
                  <ArrowRight />
                </li>
                </ul>
          </div>

        </div>
      </section>

      <section className="w-3/5 flex flex-col gap-6 my-5">
        <h3 className="text-3xl text-blue-800 text-center">Experience</h3>
        <div className="w-full flex items-center justify-evenly gap-5">
        <div className="h-96 w-4/12 bg-gray-100 flex flex-col justify-between">
            <div className="h-1/2 w-full  p-4">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg"
                alt="nature"
              />
            </div>

            <p className="text-left px-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              cum, mollitia deleniti labore sed illum.
            </p>
            <ul className="flex justify-between items-center px-5 py-3">
            <li className="flex gap-2  text-blue-800 font-bold">
            <Timer />
            Experience
            </li>
            <li className="text-white p-1 rounded-full bg-teal-800 cursor-pointer">
                  <ArrowRight />
                </li>
                </ul>
          </div>

          <div className="h-96 w-4/12 bg-gray-100 flex flex-col justify-between">
            <div className="h-1/2 w-full  p-4">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg"
                alt="nature"
              />
            </div>

            <p className="text-left px-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              cum, mollitia deleniti labore sed illum.
            </p>
            <ul className="flex justify-between items-center px-5 py-3">
            <li className="flex gap-2  text-blue-800 font-bold">
            <Timer />
            Experience
            </li>
            <li className="text-white p-1 rounded-full bg-teal-800 cursor-pointer">
                  <ArrowRight />
                </li>
                </ul>
          </div>

          <div className="h-96 w-4/12 bg-gray-100 flex flex-col justify-between">
            <div className="h-1/2 w-full  p-4">
              <img
                className="h-full w-full object-cover"
                src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?cs=srgb&dl=pexels-fotios-photos-1107717.jpg&fm=jpg"
                alt="nature"
              />
            </div>

            <p className="text-left px-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
              cum, mollitia deleniti labore sed illum.
            </p>
            <ul className="flex justify-between items-center px-5 py-3">
            <li className="flex gap-2  text-blue-800 font-bold">
            <Timer />
            Experience
            </li>
            <li className="text-white p-1 rounded-full bg-teal-800 cursor-pointer">
                  <ArrowRight />
                </li>
                </ul>
          </div>

        </div>
      </section>

      <Footer/>
    </main>
  );
}
