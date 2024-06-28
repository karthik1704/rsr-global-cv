import React from "react";
import { Plus } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "item-1",
    question:
      "I created an EU login account, but I did not receive a confirmation email. What should I do?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
  {
    id: "item-2",
    question:
      " I tried to create an account, but it says that my emails is already registered",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
  {
    id: "item-3",
    question: "I have forgotten my EU login password. What should I do?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
  {
    id: "item-4",
    question:
      "I do not have a smartphone. How do I enable two factor authentication?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
  {
    id: "item-5",
    question: "Where can I download the EU login app?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
];
const faqItems2 = [
  {
    id: "1",
    question: "What is the Common European Framework for Languages (CEFR)?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
  {
    id: "2",
    question: "What is the Europass Mobility?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
  {
    id: "3",
    question: "What is the Europass Certificate Supplement?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
  {
    id: "4",
    question: "What is the Diploma Supplement?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
];
const faqItems3 = [
  {
    id: "1",
    question: "What is the Europass Qualification Framework (EQF)?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, saepe",
  },
];

function Faq() {
  return (
    <>
      <div className="europass h-80 bg-gradient-to-r from-purple-900	 from-10% via-indigo-400 via-50% to-pink-700 ">
        <h1 className=" text-center py-24 text-6xl font-bold text-white">
          Frequently Asked Questions
        </h1>
      </div>
      <form className=" flex flex-row gap-4 ml-16 p-20">
        <input
          className="p-3 border-2 rounded-lg border-blue-950 w-3/12"
          type="text"
        />
        <button
          className=" rounded-lg bg-gradient-to-r from-blue-800 to-teal-600 h-15 w-2/12 text-white	font-semibold text-xl"
          type="submit"
        >
          Search
        </button>
      </form>

      <div>
        <h1 className=" flex flex-col items-center text-center gap-3 text-4xl font-bold text-blue-900 p-14 after:h-[2px] after:w-40 after:bg-blue-900 after:text-center ">
          2FA-FAQ
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <div className="ml-16 p-1">
              <div className="bg-zinc-100	text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
                <div className="flex flex-col ">
                  <AccordionTrigger className="p-0 hover:no-underline no-underline">
                    <Plus className="p-2" />
                    <h2>{item.question}</h2>
                  </AccordionTrigger>
                  <AccordionContent className="m-3 p-1">
                    {item.answer}
                  </AccordionContent>
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      {/* <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>
            I tried to create an account, but it says that my emails is already
            registered
          </h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>I have forgotten my EU login password. What should I do?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>
            I do not have a smartphone. How do I enable two factor
            authentication?
          </h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>Where can I download the EU login app?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>How do I set up the EU login app on a mobile device?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>
            Can I use the same device with the EU login app to access several
            Europaas accounts?
          </h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>How do I change my EU login app pin code?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>Can I use the EU login app without securing my device?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>Why are you enabling two factor authentication?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>Where do I find the QR code?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>
            My QR code reader states that the code is invalid. What do I do?
          </h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>
            I am already using eID to log in to Europaas. Do I need to activate
            it as a second factor?
          </h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>How do I activate eID as a second factor for authentication</h2>
        </div>
      </div> */}
      <div>
        <h1 className=" flex flex-col items-center text-center gap-3 text-4xl font-bold text-blue-900 p-20 after:h-[2px] after:w-52 after:bg-blue-900 after:text-center after:block">
          Europass templates
        </h1>
      </div>

      <Accordion type="single" collapsible>
        {faqItems2.map((items) => (
          <AccordionItem key={items.id} value={items.id}>
            <div className="ml-16 p-1">
              <div className="bg-zinc-100	text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
                <div className="flex flex-col ">
                  <AccordionTrigger className="p-0 hover:no-underline no-underline">
                    <Plus className="p-2" />
                    <h2>{items.question}</h2>
                  </AccordionTrigger>
                  <AccordionContent className="m-3 p-1">
                    {items.answer}
                  </AccordionContent>
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>

      {/* <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>What is the Common European Framework for Languages (CEFR)?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>What is the Europass Mobility?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>What is the Europass Certificate Supplement?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>What is the Diploma Supplement?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>What happened to the Europass Language Passport?</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>How to self-assess your language skills</h2>
        </div>
      </div>
      <div className="ml-16 p-1">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>How to describe my digital skills?</h2>
        </div>
      </div>
      <div className="ml-16 p-2">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>What is the Europass Skills Passport?</h2>
        </div>
      </div>*/}

      <div>
        <h1 className=" flex flex-col items-center text-center gap-3 text-4xl font-bold text-blue-900 p-10 after:h-[2px] after:w-52 after:bg-blue-900 after:text-center after:block">
          Support and Information
        </h1>
      </div>
      <Accordion type="single" collapsible>
        {faqItems3.map((itemvalue) => (
          <AccordionItem key={itemvalue.id} value={itemvalue.id}>
            <div className="ml-16 p-1">
              <div className="bg-zinc-100	text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
                <div className="flex flex-col ">
                  <AccordionTrigger className="p-0 hover:no-underline no-underline">
                    <Plus className="p-2" />
                    <h2>{itemvalue.question}</h2>
                  </AccordionTrigger>
                  <AccordionContent className="m-3 p-1">
                    {itemvalue.answer}
                  </AccordionContent>
                </div>
              </div>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
      {/* <div className="ml-16 p-2 ">
        <div className="bg-zinc-100 text-sm p-1 m-1 cursor-pointer flex flex-row w-11/12 gap-1">
          <Plus className="p-2" />
          <h2>What is the Europass Qualification Framework (EQF)?</h2>
        </div>
        <hr className="border-1	border-black" />
      </div> */}
      <div className="p-36">
        <h2 className="text-center text-3xl font-bold text-neutral-900">
          Share this page
        </h2>
        <div className="p-4 flex flex-row justify-center gap-7">
          <div className=" flex flex-row justify-center cursor-pointer gap-1">
            <Facebook className="size-6 h-5 text-blue-950" />
            <h3 className="text-base font-medium text-blue-700 hover:text-blue-950 hover:underline">
              Facebook
            </h3>
          </div>
          <div className=" flex flex-row justify-center cursor-pointer gap-1">
            <Twitter className="size-5 h-6 text-blue-950 " />
            <h3 className="text-base font-medium text-blue-700 hover:text-blue-950 hover:underline">
              Twitter
            </h3>
          </div>
          <div className=" flex flex-row justify-center cursor-pointer gap-1">
            <Linkedin className="size-6 h-5 text-blue-950" />
            <h3 className="text-base font-medium text-blue-700 hover:text-blue-950 hover:underline">
              Linkedin
            </h3>
          </div>
          <div className=" flex flex-row justify-center cursor-pointer gap-1">
            <Mail className="size-5 h-6 text-blue-950" />
            <h3 className="text-base font-medium text-blue-700 hover:text-blue-950 hover:underline">
              Email
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
