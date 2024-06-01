import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import { ChevronRight } from 'lucide-react';


export default function Home() {
  return (
    <main className="flex min-h-screen  items-center flex-col">
      <header className="w-3/5 p-5">
        <div className="flex items-center justify-between">
          <Link href={"/"}>
            <div className="flex gap-2">
              <div className="w-20">
                <img
                  className="w-full h-full"
                  src="https://w7.pngwing.com/pngs/978/749/png-transparent-flag-europe-symbol-flag-of-europe-european-flag-european-union-eu-international.png"
                  alt="flag"
                />
              </div>
              <h3>
                europass <br /> European union
              </h3>
            </div>
          </Link>
          <p>
            <Link href={"/"}>English</Link>
          </p>
        </div>
        <div>
          <ul className="flex gap-4 mt-5 font-bold">
            <li>Home </li>
            <li>Create your Europass CV</li>
          </ul>
        </div>
      </header>
      <Navbar />
      <section className="w-3/5 flex flex-col gap-8 my-7">
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Your Europass Profile</h4>
          <p className="text-lg leading-8">This is your personal space where you can record all your experiences and achievements. You can add your work experiences, learning experiences, different kinds of skills, publications, awards, licenses, memberships, volunteering and international experiences and even create new sections where you can add information, images, files and links to media that are relevant.</p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit">Create/Edit your Europass profile</button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Your Europass library</h4>
          <p className="text-lg leading-8">Once you have created your profile, you can add, save and share all supporting documents such as your certificates, motivation letter, cover letters, CVs, photos, or any other document on your Europass Library. </p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Go to Library(Only for registered users)</button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">CV editor</h4>
          <p className="text-lg leading-8">You can create a CV or many CVs with just a few clicks from your Europass profile or from scratch.</p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Create CV</button>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Watch quick tutorial video</button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Cover letter builder</h4>
          <p className="text-lg leading-8">Europass makes it as simple as possible for you to create a Cover letter that stands out and follows the standard structure.</p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Create Cover Letter</button>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Watch quick tutorial video</button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">My skills</h4>
          <p className="text-lg leading-8">Add your skills to the "My skills" section and Europass will suggest other relevant and related sets of skills you might also have. These skills also come with descriptions that will help you understand the related sets of skills by describing and defining them in the context of different jobs.</p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Reflect on your skills(Only for registered users)</button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Your interests</h4>
          <p className="text-lg leading-8">You can define your interests and understand your learning or career goals by adding topics you are interested in, where you want to work or study and what goals you want to achieve.</p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Identify your interests (Only for registered users)</button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">European digital credentials</h4>
          <p className="text-lg leading-8">European Digital Credentials (EDCs) are digital diplomas and certificates presented in a way that is recognized across Europe. You can receive European Digital Credentials easily from your education or training institute with a Europass account and store it in your Digital wallet. It is signed with a unique e-seal that will make it authentic and easily verifiable to employers or recruitment professionals.</p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Read more</button>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Information and support</h4>
          <p className="text-lg leading-8">The European Union offers many services that support you in your path to learn or work in Europe. You can search for courses, jobs, get advice from guidance counsellors, learn about how your qualifications and how they compare in a European country where are interested to learn or work and much more. You can check specific national services and European initiatives that can support you on the Europass platform.</p>
          <button className="border-2 border-blue-700 p-3 text-blue-600 max-w-fit font-bold rounded-md">Find more information</button>
        </div>
      </section>


      <section className="w-3/5 flex">
        <div className="flex">
          <div className="h-36 aspect-video">
            <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEr1AiVE3QtBxw5y7e8r6UKkbqfdzT0MJUA&s" alt="" />
          </div>
          <p className="text-xl font-bold text-blue-600">Plan your career with Europass</p>
        </div>
        <div className="flex">
          <div className="h-36 aspect-video">
            <img className="w-full h-full" src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" alt="" />
          </div>
          <p className="text-xl font-bold text-blue-600">Plan your learning</p>
        </div>
        <div className="flex">
          <div className="h-36 aspect-video">
            <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH7no3J-uHTAksDFCkMhHel8xdSVJNWhkHwQ&s" alt="" />
          </div>
          <p className="text-xl font-bold text-blue-600">Develop your skills through volunteering</p>
        </div>
      </section>
    </main>
  );
}
