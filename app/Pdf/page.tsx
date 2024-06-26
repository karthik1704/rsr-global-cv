'use client';
// import React from "react";
// import PDF from "./pdf";
// import PDFDownloadButton from "./pfddwld";
// import htmlRenderers from "./pdfhtml";

import { PDFViewer } from "@react-pdf/renderer";
import PDFDownloadButton from "./pfddwld";
import PDF from "./pdf";

// function page() {
//   return (
//     <div>
//       <PDF />
//       <PDFDownloadButton />
//       <htmlRenderers />
//     </div>
//   );
// }

// export default page;

// import AboutMe from "src/components/Articles/AboutMe";
// import Achievements from "src/components/Articles/Achievements";
// import { AdditionalInfo } from "src/components/Articles/AdditionalInfo";
// import { ContactInformation } from "src/components/Articles/ContactInformation";
// import Professional from "src/components/Articles/Professional";
// import Skills from "src/components/Articles/Skills";
// // import { Footer } from 'src/components/Footer/Footer';
// import { Header } from 'src/components/Header/Header';

const Page = () => {
  return (
    <>
      {/* <Header />

      <div className="container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AboutMe />
          <ContactInformation />
        </div>

        <div className="mt-12">
          <Skills />
        </div>

        <div className="mt-12">
          <Professional />
        </div>

        <div className="mt-12">
          <Achievements />
        </div>

        <div className="mt-12">
          <AdditionalInfo />
        </div>
      </div>

      <Footer /> */}
      {/* <PDFDownloadButton/> */}
      <div className="flex items-center justify-center">
      <PDFViewer width="1000" height="600">
        <PDF/>
      </PDFViewer>
      </div>
     
    </>

  );
};

export default Page;
